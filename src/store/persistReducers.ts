import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persist = (reducers: Reducer): Reducer => {
  const persistedReducer = persistReducer(
    {
      key: 'WiserTest',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persistedReducer;
};

export default persist;
