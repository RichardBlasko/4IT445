import React, {Component} from 'react';
import { connect } from 'react-redux';

import {AdminPribehyListTemplate} from '../templates/AdminPribehyListTemplate';
import {AdminPageWrapper} from "../organisms/AdminPageWrapper";
import { startFetchPribehy } from '../../services/PribehyList/actions';

import {
  getIsLoading,
  getPribehy,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/PribehyList/reducer';

class AdminStoryPageRaw extends Component {
  componentDidMount() {
    const { startFetchPribehy } = this.props;
    startFetchPribehy();
  }

  render() {
    const { isLoading, pribehy, isLoaded, isError, error } = this.props;

    return (
      <AdminPageWrapper>
        <AdminPribehyListTemplate
          isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          pribehy={pribehy}
          error={error}
        />
      </AdminPageWrapper>
    );
  }
}

const mapStateToProps = storeState => {
  const { pribehyList } = storeState;
  return {
    isLoading: getIsLoading(pribehyList),
    pribehy: getPribehy(pribehyList),
    isLoaded: getIsLoaded(pribehyList),
    error: getError(pribehyList),
    isError: getIsError(pribehyList),
  };
};

const mapDispatchToProps = {
  startFetchPribehy,
};

export const AdminStoryPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminStoryPageRaw);
