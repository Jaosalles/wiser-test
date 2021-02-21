import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    id: '',
  },
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SET_TOKEN:
      return produce(state, (draft: Draft<AuthState>) => {
        const { id }: { id: string } = action.payload;
        console.log('reducer ID', id);
        draft.data.id = id;
      });

    default:
      return state;
  }
};

export default auth;
