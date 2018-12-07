export const DIAGNOSIS_LIST_FETCH_DIAGNOSIS = 'DIAGNOSIS_LIST_FETCH_DIAGNOSIS';
export const DIAGNOSIS_LIST_FETCH_DIAGNOSIS_SUCCESS =
  'DIAGNOSIS_LIST_FETCH_DIAGNOSIS_SUCCESS';
export const DIAGNOSIS_LIST_FETCH_DIAGNOSIS_FAILURE =
  'DIAGNOSIS_LIST_FETCH_DIAGNOSIS_FAILURE';
export const DIAGNOSIS_LIST_FETCH_ONE_DIAGNOSIS_SUCCESS =
  'DIAGNOSIS_LIST_FETCH_ONE_DIAGNOSIS_SUCCESS';

export const fetchDiagnosis = () => ({
  type: DIAGNOSIS_LIST_FETCH_DIAGNOSIS,
});

export const fetchDiagnosisSuccess = diagnozy => ({
  type: DIAGNOSIS_LIST_FETCH_DIAGNOSIS_SUCCESS,
  payload: { diagnozy },
});

export const fetchDiagnosisFailure = error => ({
  type: DIAGNOSIS_LIST_FETCH_DIAGNOSIS_FAILURE,
  payload: { error },
});

export const fetchOneDiagnosisSuccess = diagnoza => ({
  type: DIAGNOSIS_LIST_FETCH_ONE_DIAGNOSIS_SUCCESS,
  payload: { diagnoza },
});

export const startFetchOneDiagnosis = id => (dispatch, getState, { api }) => {
// export const startFetchDiagnosis = message => (dispatch, getState, { api }) => {
  dispatch(fetchDiagnosis());

  api
//  .post("url", message)
    .get('http://dev.backend.team03.vse.handson.pro/api/diagnozy/' + id)
    .then(({ data }) => {
    //.then(( data ) => {
    //  console.log(data)
      //const status = data.status
      const { diagnozy } = data;
      dispatch(fetchOneDiagnosisSuccess(diagnozy));
    })
    //.catch(() => {
    .catch(error => {
      //dispatch(fetchDiagnosisFailure('Failed fetching diagnosis'));
      dispatch(fetchDiagnosisFailure(error));
    });
};

export const startFetchDiagnosis = () => (dispatch, getState, { api }) => {
// export const startFetchDiagnosis = message => (dispatch, getState, { api }) => {
  dispatch(fetchDiagnosis());

  api
//  .post("url", message)
    .get('http://dev.backend.team03.vse.handson.pro/api/diagnozy')
    .then(({ data }) => {
    //.then(( data ) => {
    //  console.log(data)
      //const status = data.status
      const { diagnozy } = data;
      dispatch(fetchDiagnosisSuccess(diagnozy));
    })
    //.catch(() => {
    .catch(error => {
      //dispatch(fetchDiagnosisFailure('Failed fetching diagnosis'));
      dispatch(fetchDiagnosisFailure(error));
    });
};
