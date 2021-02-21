import { PersistGate } from 'redux-persist/integration/react';

import { useStore } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { AppContext, AppProps } from 'next/app';

import { StoreApp, wrapper } from '../store/index';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore();

  return (
    <PersistGate loading={null} persistor={(store as StoreApp).persistor}>
      <GlobalStyle />
      <ToastContainer className="toast-container" />
      <Component {...pageProps} />
    </PersistGate>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const slug = ctx?.req?.headers.host?.split('.')[0];
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      pathname: ctx.pathname,
      slug,
    },
  };
};

export default wrapper.withRedux(MyApp);
