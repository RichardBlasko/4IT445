import React, {Component} from 'react';

import {PreventionListTemplate} from '../templates/PreventionListTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class PreventionListPage extends Component {
  render() {
    return (
      <PageWrapper>
        <PreventionListTemplate/>
      </PageWrapper>
    );
  }
}
