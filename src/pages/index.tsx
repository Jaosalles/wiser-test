import React, { useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import ComponentLoadingButton from '~/components/loading/Button';
import ComponentAlert from '~/components/modal/Alert';

import {
  ActionButton,
  Container,
  DivisorLogin,
  ForgotPassword,
  FormContainer,
  Input,
  Label,
  SubTitle,
  Title,
} from '~/styles/pages/index';

import { ApplicationState } from '~/store';
import * as AuthActions from '~/store/modules/auth/actions';
import * as UtilsActions from '~/store/modules/utils/actions';

import { BtnGlobal, ErrorMessage } from '../styles/general';

export interface SignInFormValues {
  email: string;
  password: string;
}

export default function Home() {
  const dispatch = useDispatch();

  const formikSignInRef = useRef<FormikProps<SignInFormValues>>(null);

  const visible = useSelector(
    (state: ApplicationState) => state.utils.data.modal.visible.login
  );
  const loading = useSelector(
    (state: ApplicationState) => state.loading.data.signIn
  );

  const schemaSignIn = Yup.object().shape({
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Informe o seu e-mail'),
    password: Yup.string().required('Informe sua senha'),
  });

  const handleSignIn = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      dispatch(AuthActions.signInRequest(email, password, formikSignInRef));
    },
    [dispatch]
  );

  const handleCloseAlert = useCallback(() => {
    dispatch(UtilsActions.closeModalLogin());
  }, [dispatch]);

  return (
    <Container>
      <DivisorLogin bgImage="url('/bgImage.png')" widthIpad="327px" />
      <DivisorLogin
        left="392px"
        leftIphone="0"
        padding="0 20px"
        position="absolute"
        widthIpad="37%"
        widthMobile="100%"
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          innerRef={formikSignInRef}
          onSubmit={handleSignIn}
          validationSchema={schemaSignIn}
        >
          {({ errors, handleSubmit, touched, values, handleChange }) => (
            <FormContainer onSubmit={handleSubmit}>
              <Title>Olá, seja bem-vindo!</Title>
              <SubTitle>Para acessar a plataforma faça seu login.</SubTitle>
              <Label>E-MAIL</Label>
              <Input
                name="email"
                onChange={handleChange}
                placeholder="user.email@gmail.com"
                type="text"
                value={values.email}
              />
              {errors.email && touched.email && (
                <ErrorMessage margin="8px 0 17px">{errors.email}</ErrorMessage>
              )}
              <Label>SENHA</Label>
              <Input
                name="password"
                onChange={handleChange}
                placeholder="********"
                type="password"
                value={values.password}
              />
              {errors.password && touched.password && (
                <ErrorMessage margin="8px 0 0">{errors.password}</ErrorMessage>
              )}
              <BtnGlobal
                margin="24px 0 0"
                marginIpad="24px 0 0"
                type="submit"
                width="100%"
                widthIpad="100%"
              >
                {loading ? <ComponentLoadingButton /> : 'Entrar'}
              </BtnGlobal>
              <ForgotPassword>
                Esqueceu seu login ou senha? Clique
{' '}
                <ActionButton>aqui</ActionButton>
              </ForgotPassword>
            </FormContainer>
          )}
        </Formik>
      </DivisorLogin>

      <ComponentAlert
        message="Login realizado com sucesso!"
        onCancel={handleCloseAlert}
        onConfirm={handleCloseAlert}
        title="Atenção"
        visible={visible}
      />
    </Container>
  );
}
