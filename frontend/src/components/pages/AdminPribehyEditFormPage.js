import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AdminPribehyEditFormTemplate } from '../templates/AdminPribehyEditFormTemplate';
import { startFetchDiagnosis } from '../../services/DiagnosisList/actions';

import {
  getIsLoading,
  getDiagnosis,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/DiagnosisList/reducer';

class AdminPribehyEditFormPageRaw extends Component {
  componentDidMount() {
    const { startFetchDiagnosis } = this.props;
    startFetchDiagnosis();
  }

  render() {
    const { isLoading, diagnozy, isLoaded, isError, error } = this.props;

    return (
        <AdminPribehyEditFormTemplate
          isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          diagnozy={diagnozy}
          error={error}
        />
    );
  }
}

const mapStateToProps = storeState => {
  const { diagnosisList } = storeState;
  return {
    isLoading: getIsLoading(diagnosisList),
    diagnozy: getDiagnosis(diagnosisList),
    isLoaded: getIsLoaded(diagnosisList),
    error: getError(diagnosisList),
    isError: getIsError(diagnosisList),
  };
};

const mapDispatchToProps = {
  startFetchDiagnosis,
};

export const AdminPribehyEditFormPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPribehyEditFormPageRaw);
