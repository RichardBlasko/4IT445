import {
  PARTNERS_LIST_FETCH_PARTNERS,
  PARTNERS_LIST_FETCH_PARTNERS_SUCCESS,
  PARTNERS_LIST_FETCH_PARTNERS_FAILURE,
} from './actions';

const initialState = {
  partneri: null,
  isLoading: false,
  error: null,
};

export const partnersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTNERS_LIST_FETCH_PARTNERS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PARTNERS_LIST_FETCH_PARTNERS_SUCCESS: {
      const { partneri } = action.payload;

      return {
        ...state,
        partneri,
        isLoading: false,
        error: null,
      };
    }

    case PARTNERS_LIST_FETCH_PARTNERS_FAILURE: {
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

export const getPartners = state => state.partneri || [];

export const getIsLoaded = state => state.partneri !== null;

export const getError = state => state.error;

export const getIsError = state => state.error !== null;
