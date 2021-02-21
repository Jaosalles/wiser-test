import React from 'react';

import Modal from 'react-modal';

import ComponentLoadingButton from '~/components/loading/Button';

import colors from '~/styles/colors';
import { BtnGlobal } from '~/styles/general';

import { ModalStyle } from '../styles';
import { AlertButtons, AlertContent, AlertHeader, AlertText } from './styles';

interface Props {
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  visible: boolean;
  loading?: boolean;
}

const Default: React.FC<Props> = ({
  loading = false,
  message,
  onCancel,
  onConfirm,
  title,
  visible,
}) => {
  return (
    <Modal
      ariaHideApp={false}
      closeTimeoutMS={500}
      isOpen={visible}
      style={ModalStyle}
    >
      <AlertContent>
        <AlertHeader>
          <AlertText
            color={colors.primary}
            fontWeight="bold"
            padding="12px 20px"
          >
            {title}
          </AlertText>
        </AlertHeader>

        <AlertText fontSize="0.9rem" padding="30px 30px">
          {message}
        </AlertText>

        <AlertButtons>
          <BtnGlobal
            backgroundColor={colors.regular}
            borderRadius="0px"
            fontSize="0.9rem"
            onClick={onCancel}
            type="button"
            width="100%"
            widthIpad="100%"
          >
            Fechar
          </BtnGlobal>

          <BtnGlobal
            backgroundColor={colors.primary}
            borderRadius="0px"
            fontSize="0.9rem"
            onClick={onConfirm}
            type="button"
            width="100%"
            widthIpad="100%"
          >
            {loading ? <ComponentLoadingButton /> : 'Ok'}
          </BtnGlobal>
        </AlertButtons>
      </AlertContent>
    </Modal>
  );
};

export default Default;
