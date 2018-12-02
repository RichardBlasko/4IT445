import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { preventionListReducer } from '../services/PreventionList/reducer';
import { diagnosisListReducer } from '../services/DiagnosisList/reducer';
import { partnersListReducer } from '../services/PartnersList/reducer';
import { shoppingCartReducer } from '../services/StoryList/reducer';
import { pribehyListReducer } from '../services/PribehyList/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['preventionCard'],
  whitelist: ['shoppingCart'],
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    preventionCard: preventionListReducer,
    shoppingCart: shoppingCartReducer,
    diagnosisList: diagnosisListReducer,
    partnersList: partnersListReducer,
    pribehyList: pribehyListReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
