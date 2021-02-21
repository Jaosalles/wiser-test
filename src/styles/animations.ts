import { keyframes } from 'styled-components';

const leftIn = keyframes`
  from {
    transform: translateX(-900px);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rightIn = keyframes`
  from {
    transform: translateX(900px)
  }
  to {
    transform: translateX(0)
  }
`;

export default {
  leftIn,
  fadeIn,
  rightIn,
};
