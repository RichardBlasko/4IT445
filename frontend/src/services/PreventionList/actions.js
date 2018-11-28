export const PREVENTION_LIST_FETCH_PREVENTIONS = 'PREVENTION_LIST_FETCH_PREVENTIONS';
export const PREVENTION_LIST_FETCH_PREVENTIONS_SUCCESS =
  'PREVENTION_LIST_FETCH_PREVENTIONS_SUCCESS';
export const PREVENTION_LIST_FETCH_PREVENTIONS_FAILURE =
  'PREVENTION_LIST_FETCH_PREVENTIONS_FAILURE';

export const fetchPreventions = () => ({
  type: PREVENTION_LIST_FETCH_PREVENTIONS,
});

export const fetchPreventionsSuccess = prevence => ({
  type: PREVENTION_LIST_FETCH_PREVENTIONS_SUCCESS,
  payload: { prevence },
});

export const fetchPreventionsFailure = error => ({
  type: PREVENTION_LIST_FETCH_PREVENTIONS_FAILURE,
  payload: { error },
});

export const startFetchPreventions = () => (dispatch, getState, { api }) => {
  dispatch(fetchPreventions());

  api
    .get('http://dev.backend.team03.vse.handson.pro/api/prevence')
    .then(({ data }) => {
      const { prevence } = data;
      dispatch(fetchPreventionsSuccess(prevence));
    })
    .catch(() => {
      dispatch(fetchPreventionsFailure('Failed fetching preventions'));
    });
};
