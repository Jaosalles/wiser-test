import { RefObject } from 'react';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { FormikProps } from 'formik';

import { NextRouter } from 'next/router';
import { SignInFormValues } from '~/pages/index';

import * as Helper from '~/utils/helper';

import api from '~/services/api';

import * as UtilsActions from '../utils/actions';
import * as AuthActions from './actions';
import { AuthTypes } from './types';

interface SignInResponse {
  data: { id: string };
}

interface SignIn {
  payload: {
    email: string;
    password: string;
    formikSignInRef: RefObject<FormikProps<SignInFormValues>>;
    router: NextRouter;
  };
  type: string;
}

interface SetToken {
  payload: {
    auth: { data: { id: string } };
  };
  type: string;
}

function setToken({ payload }: SetToken) {
  if (!payload) {
    return;
  }

  if (payload?.auth?.data.id) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.data.id}`;
  }
}

function* authSignIn({
  payload: { email, formikSignInRef, password },
}: SignIn) {
  try {
    const { data }: SignInResponse = yield call(api.post, '/session', {
      email,
      password,
    });

    api.defaults.headers.Authorization = `Bearer ${data.id}`;
    formikSignInRef.current?.resetForm();
    yield put(AuthActions.setToken(data.id));
    yield put(AuthActions.signInSuccess());
    yield put(UtilsActions.openModalLogin());
  } catch (err) {
    yield put(AuthActions.signInFailure());

    Helper.error(err, 'Falha ao autenticar usuário');
    if (formikSignInRef.current) {
      formikSignInRef.current.setFieldValue('password', '');
      formikSignInRef.current.setFieldTouched('password', false);
    }
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, authSignIn),
]);
