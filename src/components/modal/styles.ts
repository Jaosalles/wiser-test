import styled from 'styled-components';

import colors from '~/styles/colors';

export const ModalStyle = {
  content: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    left: 0,
    padding: '25px 0',
    border: 'none',
    top: 0,
    width: '100%',
    overflow: 'none',
    background: 'rgba(0, 0, 0, 0.4)',
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
};

interface ModalContainerProps {
  maxHeightIpad?: string;
  maxHeightMobile?: string;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  background: ${colors.white};
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  max-height: 85%;
  max-width: 650px;
  width: 100%;

  @media only screen and (max-width: 1439px) {
    max-height: 85%;
  }

  @media only screen and (max-width: 1239px) {
    max-height: 85%;
  }
  @media only screen and (max-width: 768px) {
    max-height: ${props => (props.maxHeightIpad ? props.maxHeightIpad : '85%')};
  }
  @media only screen and (max-width: 480px) {
    max-height: ${props =>
      props.maxHeightMobile ? props.maxHeightMobile : '85%'};
  }
`;

export const ModalHeader = styled.header`
  align-items: center;
  border-radius: 5px 5px 0 0;
  display: flex;
  height: 60px;
  padding: 10px 10px 0 20px;
  width: 100%;
`;

interface ModalTitleProps {
  fontSize?: string;
  justifyContent?: string;
}

export const ModalTitle = styled.div<ModalTitleProps>`
  align-items: center;
  color: ${props => (props.color ? props.color : colors.dark)};
  display: flex;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
  font-weight: 600;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  width: 100%;
`;

interface ModalBodyProps {
  maxHeight?: string;
  minHeight?: string;
  heightIpad?: string;
}

export const ModalBody = styled.div<ModalBodyProps>`
  display: flex;
  flex-flow: row wrap;
  max-height: ${props => (props.maxHeight ? props.maxHeight : '100%')};
  min-height: ${props => (props.minHeight ? props.minHeight : '0')};
  overflow-y: auto;
  padding: 0 35px 10px;
  width: 100%;

  ::-webkit-scrollbar {
    background: ${colors.light};
    width: 4px;
  }

  ::-webkit-scrollbar-button {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.light};
    width: 4px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px 10px;
    height: ${props => (props.heightIpad ? props.heightIpad : 'auto')};
  }
`;

interface ModalBodyFormProps {
  maxHeight?: string;
}

export const ModalBodyForm = styled.form<ModalBodyFormProps>`
  display: flex;
  flex-flow: row wrap;
  max-height: ${props => (props.maxHeight ? props.maxHeight : '100%')};
  overflow-y: scroll;
  padding: 0 35px 10px;
  width: 100%;

  ::-webkit-scrollbar {
    background: ${colors.light};
    width: 4px;
  }

  ::-webkit-scrollbar-button {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.light};
    width: 4px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px 10px;
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  height: 70px;
  justify-content: flex-end;
  padding: 10px 35px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
