import React, {Component} from 'react';
import { connect } from 'react-redux';

import {PreventionListTemplate} from '../templates/PreventionListTemplate';
import {PageWrapper} from "../organisms/PageWrapper";
import { startFetchPreventions } from '../../services/PreventionList/actions';

import {
  getIsLoading,
  getPreventions,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/PreventionList/reducer';

class PreventionListPageRaw extends Component {
  componentDidMount() {
    const { startFetchPreventions } = this.props;
    startFetchPreventions();
  }

  render() {
    const { isLoading, prevence, isLoaded, isError, error } = this.props;

    return (
      <PageWrapper>
        <PreventionListTemplate
          isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          prevence={prevence}
          error={error}
        />
      </PageWrapper>
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

export const PreventionListPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreventionListPageRaw);
