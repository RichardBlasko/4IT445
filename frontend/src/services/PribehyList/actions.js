export const PRIBEHY_LIST_FETCH_PRIBEHY = 'PRIBEHY_LIST_FETCH_PRIBEHY';
export const PRIBEHY_LIST_FETCH_PRIBEHY_SUCCESS =
  'PRIBEHY_LIST_FETCH_PRIBEHY_SUCCESS';
export const PRIBEHY_LIST_FETCH_PRIBEHY_FAILURE =
  'PRIBEHY_LIST_FETCH_PRIBEHY_FAILURE';

export const fetchPribehy = () => ({
  type: PRIBEHY_LIST_FETCH_PRIBEHY,
});

export const fetchPribehySuccess = pribehy => ({
  type: PRIBEHY_LIST_FETCH_PRIBEHY_SUCCESS,
  payload: { pribehy },
});

export const fetchPribehyFailure = error => ({
  type: PRIBEHY_LIST_FETCH_PRIBEHY_FAILURE,
  payload: { error },
});

export const startFetchPribehy = () => (dispatch, getState, { api }) => {
// export const startFetchDiagnosis = message => (dispatch, getState, { api }) => {
  dispatch(fetchPribehy());

  api
//  .post("url", message)
    .get('http://dev.backend.team03.vse.handson.pro/api/pribehy')
    .then(({ data }) => {
    //.then(( data ) => {
      //const status = data.status
      const { pribehy } = data;
      dispatch(fetchPribehySuccess(pribehy));
    })
    //.catch(() => {
    .catch(error => {
      //dispatch(fetchDiagnosisFailure('Failed fetching diagnosis'));
      dispatch(fetchPribehyFailure(error));
    });
};
