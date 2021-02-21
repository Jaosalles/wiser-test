import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Persistor, persistStore } from 'redux-persist';
import createSagaMiddleware, { SagaMiddleware, Task } from 'redux-saga';

import { AuthState } from './modules/auth/types';
import { LoadingState } from './modules/loading/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { UtilsState } from './modules/utils/types';
import persistReducers from './persistReducers';

export interface ApplicationState {
  auth: AuthState;
  loading: LoadingState;
  utils: UtilsState;
}

export interface StoreApp extends Store<ApplicationState> {
  sagaTask?: Task;
  persistor: Persistor;
}

const bindMiddleware = (middleware: SagaMiddleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<ApplicationState> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const isServer = typeof window === 'undefined';
  if (isServer) {
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
    (store as StoreApp).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
  }

  const store: Store<ApplicationState> = createStore(
    persistReducers(rootReducer),
    bindMiddleware([sagaMiddleware])
  );
  (store as StoreApp).persistor = persistStore(store);
  (store as StoreApp).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<ApplicationState>(makeStore, {
  debug: true,
});
