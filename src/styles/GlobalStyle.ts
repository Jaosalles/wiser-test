import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
  }

  input, textarea, button, select, a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html, body, #__next  {
    height: 100%;
    min-height: 100%;
    &.fixed {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
  }

  body {
    --webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility;
    background: #FFF;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &.modal-open {
      overflow: hidden;
      position: relative;
    }
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family:  'Montserrat', Arial, sans-serif !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,

  a, button {
    cursor: pointer;
    transition: all .3s ease-in-out;
  }

  .css-2b097c-container {
    width: 100%;
    max-width: 250px;
    .css-2613qy-menu {
      z-index: 3;
    }
  }

  /* MODAL ANIMATION */
  .ReactModalPortal > div {
    opacity: 0;
  }
  .ReactModalPortal .ReactModal__Overlay {
    transition: opacity 500ms ease-in-out;
    background-color: transparent !important;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
        opacity: 0;
    }
  }
 
  /* ANIMATION FADE IN*/
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* ANIMATIONS FADE OUT*/
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
