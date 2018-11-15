import React, {Component} from 'react';
import { connect } from 'react-redux';

import {AdminDiagnosisListTemplate} from '../templates/AdminDiagnosisListTemplate';
import {AdminPageWrapper} from "../organisms/AdminPageWrapper";
import { startFetchDiagnosis } from '../../services/DiagnosisList/actions';

import {
  getIsLoading,
  getDiagnosis,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/DiagnosisList/reducer';

class AdminDiagnosisPageRaw extends Component {
  componentDidMount() {
    const { startFetchDiagnosis } = this.props;
    startFetchDiagnosis();
  }

  render() {
    const { isLoading, diagnozy, isLoaded, isError, error } = this.props;

    return (
      <AdminPageWrapper>
        <AdminDiagnosisListTemplate
          isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          diagnozy={diagnozy}
          error={error}
        />
      </AdminPageWrapper>
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

export const AdminDiagnosisPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminDiagnosisPageRaw);
