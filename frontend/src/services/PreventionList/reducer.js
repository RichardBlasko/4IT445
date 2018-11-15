import {
  PREVENTION_LIST_FETCH_PREVENTIONS,
  PREVENTION_LIST_FETCH_PREVENTIONS_SUCCESS,
  PREVENTION_LIST_FETCH_PREVENTIONS_FAILURE,
} from './actions';

const initialState = {
  prevence: null,
  isLoading: false,
  error: null,
};

export const preventionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVENTION_LIST_FETCH_PREVENTIONS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PREVENTION_LIST_FETCH_PREVENTIONS_SUCCESS: {
      const { prevence } = action.payload;

      return {
        ...state,
        prevence,
        isLoading: false,
        error: null,
      };
    }

    case PREVENTION_LIST_FETCH_PREVENTIONS_FAILURE: {
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

export const getPreventions = state => state.prevence || [];

export const getIsLoaded = state => state.prevence !== null;

export const getError = state => state.error;

export const getIsError = state => state.error !== null;
