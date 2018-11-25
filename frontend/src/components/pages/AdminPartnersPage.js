import React, {Component} from 'react';
import { connect } from 'react-redux';

import {AdminPartnersListTemplate} from '../templates/AdminPartnersListTemplate';
import {AdminPageWrapper} from "../organisms/AdminPageWrapper";
import { startFetchPartners } from '../../services/PartnersList/actions';

import {
  getIsLoading,
  getPartners,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/PartnersList/reducer';

class AdminPartnersPageRaw extends Component {
  componentDidMount() {
    const { startFetchPartners } = this.props;
    startFetchPartners();
  }

  render() {
    const { isLoading, partneri, isLoaded, isError, error } = this.props;

    return (
      <AdminPageWrapper>
        <AdminPartnersListTemplate
          isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          partneri={partneri}
          error={error}
        />
      </AdminPageWrapper>
    );
  }
}

const mapStateToProps = storeState => {
  const { partnersList } = storeState;
  return {
    isLoading: getIsLoading(partnersList),
    partneri: getPartners(partnersList),
    isLoaded: getIsLoaded(partnersList),
    error: getError(partnersList),
    isError: getIsError(partnersList),
  };
};

const mapDispatchToProps = {
  startFetchPartners,
};

export const AdminPartnersPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPartnersPageRaw);
