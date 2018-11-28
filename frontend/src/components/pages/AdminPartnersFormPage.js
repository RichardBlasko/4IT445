import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AdminPartnersFormTemplate } from '../templates/AdminPartnersFormTemplate';
import { startFetchDiagnosis } from '../../services/DiagnosisList/actions';

import {
  getIsLoading,
  getDiagnosis,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/DiagnosisList/reducer';

class AdminPartnersFormPageRaw extends Component {
  componentDidMount() {
    const { startFetchDiagnosis } = this.props;
    startFetchDiagnosis();
  }

  render() {
    const { isLoading, diagnozy, isLoaded, isError, error } = this.props;

    return (
        <AdminPartnersFormTemplate
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

export const AdminPartnersFormPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPartnersFormPageRaw);
