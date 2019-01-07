import React, {Component} from 'react';
import { connect } from 'react-redux';

import {AdminPreventionListTemplate} from '../templates/AdminPreventionListTemplate';
import {AdminPageWrapper} from "../organisms/AdminPageWrapper";
import { startFetchPreventions } from '../../services/PreventionList/actions';

import {
  getIsLoading,
  getPreventions,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/PreventionList/reducer';

class AdminPreventionPageRaw extends Component {
  componentDidMount() {
    const { startFetchPreventions } = this.props;
    startFetchPreventions();
  }

  render() {
    const { isLoading, prevence, isLoaded, isError, error } = this.props;

    return (
      <AdminPageWrapper>
        <AdminPreventionListTemplate
          isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          prevence={prevence}
          error={error}
        />
      </AdminPageWrapper>
    );
  }
}

const mapStateToProps = storeState => {
  const { preventionCard } = storeState;
  return {
    isLoading: getIsLoading(preventionCard),
    prevence: getPreventions(preventionCard),
    isLoaded: getIsLoaded(preventionCard),
    error: getError(preventionCard),
    isError: getIsError(preventionCard),
  };
};

const mapDispatchToProps = {
  startFetchPreventions,
};

export const AdminPreventionPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPreventionPageRaw);
