export enum UtilsTypes {
  OPEN_MODAL_LOGIN = '@utils/OPEN_MODAL_LOGIN',
  CLOSE_MODAL_LOGIN = '@utils/CLOSE_MODAL_LOGIN',
}

interface Utils {
  modal: {
    visible: {
      login: boolean;
    };
  };
}

export interface UtilsState {
  readonly data: Utils;
}
