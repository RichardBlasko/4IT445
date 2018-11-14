import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { preventionListReducer } from '../services/PreventionList/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['preventionCard'],
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    preventionCard: preventionListReducer
  });

  return persistReducer(persistConfig, rootReducer);
};
