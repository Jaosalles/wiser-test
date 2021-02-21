import styled from 'styled-components';

import colors from '~/styles/colors';

interface BtnGlobalProps {
  alignItems?: string;
  alignSelf?: string;
  backgroundColor?: string;
  borderBottomWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  boxShadow?: string;
  color?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  justifyContent?: string;
  letterSpacing?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  textShadow?: string;
  textTransform?: string;
  width?: string;
  verticalAlign?: string;
  widthIpad?: string;
  heightIpad?: string;
  fontSizeIpad?: string;
  marginIpad?: string;
}

export const BtnGlobal = styled.button<BtnGlobalProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'initial')};
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.gradientButton};
  border-bottom-width: ${props =>
    props.borderBottomWidth ? props.borderBottomWidth : '0'};
  border-color: ${props =>
    props.borderColor ? props.borderColor : colors.transparent};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  border-style: solid;
  border-width: ${props => (props.borderWidth ? props.borderWidth : '0')};
  box-shadow: ${props =>
    props.boxShadow ? props.boxShadow : '0 0 0 transparent'};
  color: ${props => (props.color ? props.color : colors.white)};
  display: ${props => (props.display ? props.display : 'flex')};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  line-height: ${props => (props.fontWeight ? props.fontWeight : '20px')};
  height: ${props => (props.height ? props.height : '40px')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${props => (props.margin ? props.margin : '0px')};
  padding: ${props => (props.padding ? props.padding : '0px')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  text-shadow: ${props =>
    props.textShadow ? props.textShadow : '0 0 0 transparent'};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'uppercase'};
  transition: opacity 0.3s;
  width: ${props => (props.width ? props.width : '150px')};

  ${props =>
    props.verticalAlign ? `vertical-align: ${props.verticalAlign}` : null};

  :hover {
    opacity: 0.8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    width: ${props => (props.widthIpad ? props.widthIpad : '80px')};
    height: ${props => (props.heightIpad ? props.heightIpad : '35px')};
    font-size: ${props => (props.fontSizeIpad ? props.fontSizeIpad : '13px')};
    margin: ${props => (props.marginIpad ? props.marginIpad : '0')};
    &.forgot {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 375px) {
    position: absolute;
    top: 400px;
    margin: 0;
    width: 168px;
    height: 48px;
    left: 70px;
  }

  &.clean {
    transition: width 0.4s, visibility 0.4s;
    visibility: hidden;
    width: 0;
    &.animatedBtn {
      visibility: visible;
      width: 90px;
      @media screen and (max-width: 480px) {
        width: 60px;
      }
    }
  }
`;

// UTILITÁRIOS
interface ErrorMessageProps {
  margin?: string;
  float?: string;
  width?: string;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  align-self: flex-start;
  color: ${colors.danger};
  font-size: 10.5px;
  letter-spacing: 0.4px;
  margin: ${props => (props.margin ? props.margin : '0 0 0 0')};
  padding-left: 20px;
  ${props => (props.float ? `float:${props.float}` : null)}

  ${props => (props.width ? `width:${props.width}` : null)}
`;
