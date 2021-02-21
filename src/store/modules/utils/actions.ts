import { action } from 'typesafe-actions';

import { UtilsTypes } from './types';

export const openModalLogin = () => action(UtilsTypes.OPEN_MODAL_LOGIN);
export const closeModalLogin = () => action(UtilsTypes.CLOSE_MODAL_LOGIN);
