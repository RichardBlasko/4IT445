import {
  PRIBEHY_LIST_FETCH_PRIBEHY,
  PRIBEHY_LIST_FETCH_PRIBEHY_SUCCESS,
  PRIBEHY_LIST_FETCH_PRIBEHY_FAILURE,
} from './actions';

const initialState = {
  pribehy: null,
  isLoading: false,
  error: null,
};

export const pribehyListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIBEHY_LIST_FETCH_PRIBEHY:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PRIBEHY_LIST_FETCH_PRIBEHY_SUCCESS: {
      const { pribehy } = action.payload;
      return {
        ...state,
        pribehy,
        isLoading: false,
        error: null,
      };
    }

    case PRIBEHY_LIST_FETCH_PRIBEHY_FAILURE: {
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

export const getPribehy = state => state.pribehy || [""];

export const getIsLoaded = state => state.pribehy !== null;

export const getError = state => state.error;

export const getIsError = state => state.error !== null;
