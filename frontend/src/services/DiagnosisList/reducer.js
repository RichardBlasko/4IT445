import {
  DIAGNOSIS_LIST_FETCH_DIAGNOSIS,
  DIAGNOSIS_LIST_FETCH_DIAGNOSIS_SUCCESS,
  DIAGNOSIS_LIST_FETCH_DIAGNOSIS_FAILURE,
} from './actions';

const initialState = {
  diagnozy: null,
  isLoading: false,
  error: null,
};

export const diagnosisListReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIAGNOSIS_LIST_FETCH_DIAGNOSIS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case DIAGNOSIS_LIST_FETCH_DIAGNOSIS_SUCCESS: {
      const { diagnozy } = action.payload;

      return {
        ...state,
        diagnozy,
        isLoading: false,
        error: null,
      };
    }

    case DIAGNOSIS_LIST_FETCH_DIAGNOSIS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

// - sectors - //

export const getIsLoading = state => state.isLoading;

export const getDiagnosis = state => state.diagnozy || [];

export const getIsLoaded = state => state.diagnozy !== null;

export const getError = state => state.error;

export const getIsError = state => state.error !== null;
