import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { UtilsState, UtilsTypes } from './types';

const INITIAL_STATE: UtilsState = {
  data: {
    modal: {
      visible: {
        login: false,
      },
    },
  },
};

const utils: Reducer<UtilsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UtilsTypes.OPEN_MODAL_LOGIN:
      return produce(state, (draft: Draft<UtilsState>) => {
        draft.data.modal.visible.login = true;
        document.body.style.overflow = 'hidden';
      });

    case UtilsTypes.CLOSE_MODAL_LOGIN:
      return produce(state, (draft: Draft<UtilsState>) => {
        draft.data.modal.visible.login = false;
        document.body.style.overflow = 'auto';
      });

    default:
      return state;
  }
};

export default utils;
