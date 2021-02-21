export enum AuthTypes {
  SET_TOKEN = '@auth/SET_TOKEN',

  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',
}

export interface Auth {
  id: string;
}

export interface AuthState {
  readonly data: Auth;
}
