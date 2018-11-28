export const PARTNERS_LIST_FETCH_PARTNERS = 'PARTNERS_LIST_FETCH_PARTNERS';
export const PARTNERS_LIST_FETCH_PARTNERS_SUCCESS =
  'PARTNERS_LIST_FETCH_PARTNERS_SUCCESS';
export const PARTNERS_LIST_FETCH_PARTNERS_FAILURE =
  'PARTNERS_LIST_FETCH_PARTNERS_FAILURE';

export const fetchPartners = () => ({
  type: PARTNERS_LIST_FETCH_PARTNERS,
});

export const fetchPartnersSuccess = partneri => ({
  type: PARTNERS_LIST_FETCH_PARTNERS_SUCCESS,
  payload: { partneri },
});

export const fetchPartnersFailure = error => ({
  type: PARTNERS_LIST_FETCH_PARTNERS_FAILURE,
  payload: { error },
});

export const startFetchPartners = () => (dispatch, getState, { api }) => {
// export const startFetchPartners = message => (dispatch, getState, { api }) => {
  dispatch(fetchPartners());

  api
//  .post("url", message)
    .get('http://dev.backend.team03.vse.handson.pro/api/partneri')
    .then(({ data }) => {
    //.then(( data ) => {
    //  console.log(data)
      //const status = data.status
      const { partneri } = data;
      dispatch(fetchPartnersSuccess(partneri));
    })
    //.catch(() => {
    .catch(error => {
      //dispatch(fetchPartnersFailure('Failed fetching partners'));
      dispatch(fetchPartnersFailure(error));
    });
};
