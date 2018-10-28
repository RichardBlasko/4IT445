import React, {Component} from 'react';

import {SocialNetworkListTemplate} from '../templates/SocialNetworkListTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class SocialNetworkListPage extends Component {
  render() {
    return (
      <PageWrapper>
        <SocialNetworkListTemplate/>
      </PageWrapper>
    );
  }
}
