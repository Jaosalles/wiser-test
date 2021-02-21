import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { AuthTypes } from '../auth/types';
import { LoadingState } from './types';

const INITIAL_STATE: LoadingState = {
  data: {
    signIn: false,
  },
};

const loading: Reducer<LoadingState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.signIn = true;
      });

    case AuthTypes.SIGN_IN_SUCCESS:
    case AuthTypes.SIGN_IN_FAILURE:
      return produce(state, (draft: Draft<LoadingState>) => {
        draft.data.signIn = false;
      });

    default:
      return state;
  }
};

export default loading;
