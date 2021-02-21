import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    min-height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

interface DivisorLoginProps {
  boxShadow?: string;
  bgImage?: string;
  width?: string;
  widthIpadPro?: string;
  widthIpad?: string;
  widthMobile?: string;
  displayMobile?: string;
  paddingIphone?: string;
  left?: string;
  leftIphone?: string;
  padding?: string;
  position?: string;
}

export const DivisorLogin = styled.div<DivisorLoginProps>`
  align-items: center;
  background-image: ${props => (props.bgImage ? props.bgImage : props.bgImage)};
  background-color: ${colors.gradientImage};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: start;
  position: relative;
  width: ${props => (props.width ? props.width : '60%')};
  padding: 0 120px;

  @media screen and (max-width: 1024px) {
    padding: 0 120px;
    width: ${props => (props.widthIpadPro ? props.widthIpadPro : '50%')};
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
    position: absolute;
    left: ${props => (props.left ? props.left : '0')};
    width: ${props => (props.widthIpad ? props.widthIpad : '100%')};
  }

  @media screen and (max-width: 375px) {
    background-position: center center;
    flex-direction: row;
    flex-wrap: wrap;
    left: ${props => (props.leftIphone ? props.leftIphone : '0')};
    position: ${props => (props.position ? props.position : 'fixed')};
    width: ${props => (props.widthMobile ? props.widthMobile : '100%')};
    display: ${props => (props.displayMobile ? props.displayMobile : 'flex')};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 375px) {
    background: ${colors.white};
    position: absolute;
    margin: 32px;
    padding: 32px;
    width: 311px;
    border-radius: 8px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: ${colors.primary};
`;

interface SubTitleProps {
  textAlign?: string;
  fontWeight?: string;
}

export const SubTitle = styled.h2<SubTitleProps>`
  font-style: normal;
  text-align: normal;
  padding: 16px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.secondary};
`;

interface ForgotPasswordProps {
  textAlign?: string;
  fontWeight?: string;
}

export const ForgotPassword = styled.h2<ForgotPasswordProps>`
  font-style: normal;
  text-align: center;
  padding: 16px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.secondary};

  @media screen and (max-width: 375px) {
    position: absolute;
    top: 465px;
    color: ${colors.white};
    width: 178px;
    height: 48px;
    left: 70px;
    padding: 0;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  color: ${colors.primary};
`;

interface InputProps {
  focusBorderColor?: string;
  placeholderFocusColor?: string;
  placeholderFontSize?: string;
  placeholderColor?: string;
}

export const Input = styled.input<InputProps>`
  height: 48px;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 0.3s ease;
  padding: 0 17px;
  font-size: 10px;
  &.error {
    border-color: ${colors.danger};
  }

  :focus {
    border-color: ${props =>
      props.focusBorderColor ? props.focusBorderColor : colors.primary};
    ::-webkit-input-placeholder {
      color: ${props =>
        props.placeholderFocusColor
          ? props.placeholderFocusColor
          : colors.primary};
    }
  }

  ::-webkit-input-placeholder {
    color: ${props =>
      props.placeholderColor ? props.placeholderColor : colors.primary};
    font-size: ${props =>
      props.placeholderFontSize ? props.placeholderFontSize : '10px'};
    line-height: 48px;
    transition: all 0.3s ease;
  }
`;

export const ActionButton = styled.a`
  font-style: normal;
  padding: 16px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
  color: ${colors.secondary};

  @media screen and (max-width: 375px) {
    color: ${colors.white};
  }
`;
