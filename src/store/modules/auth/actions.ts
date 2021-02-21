import { RefObject } from 'react';

import { FormikProps } from 'formik';
import { action } from 'typesafe-actions';
import { SignInFormValues } from '~/pages/index';

import { AuthTypes } from './types';

export const setToken = (id: string) => action(AuthTypes.SET_TOKEN, { id });

export const signInRequest = (
  email: string,
  password: string,
  formikSignInRef?: RefObject<FormikProps<SignInFormValues>>
) =>
  action(AuthTypes.SIGN_IN_REQUEST, {
    email,
    password,
    formikSignInRef,
  });
export const signInSuccess = () => action(AuthTypes.SIGN_IN_SUCCESS);
export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);
