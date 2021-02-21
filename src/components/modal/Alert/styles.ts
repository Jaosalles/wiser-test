import styled from 'styled-components';

import colors from '~/styles/colors';

export const AlertContent = styled.div`
  background: ${colors.white};
  border-radius: 6px;
  max-width: 420px;
  overflow: hidden;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
    margin: 0 15px;
    max-width: 100%;
  }
`;

export const AlertHeader = styled.div`
  background: ${props => props.theme.primaryColor};
`;

interface AlertTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}

export const AlertText = styled.span<AlertTextProps>`
  color: ${props => (props.color ? props.color : colors.dark)};
  display: block;
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  letter-spacing: 1px;
  padding: ${props => (props.padding ? props.padding : '30px')};
`;

interface AlertTitleProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}
export const AlertTitle = styled.span<AlertTitleProps>`
  color: ${props => (props.color ? props.color : colors.dark)};
  display: block;
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  letter-spacing: 1px;
  margin: ${props => (props.margin ? props.margin : '0 0 0 0')};
  padding: ${props => (props.padding ? props.padding : '8px 0')};
  &.error {
    color: ${colors.danger};
    font-weight: bold;
  }
`;

export const AlertButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
