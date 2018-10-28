import React, {Component} from 'react';

import {DiagnoseListTemplate} from '../templates/DiagnoseListTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class DiagnoseListPage extends Component {
  render() {
    return (
      <PageWrapper>
        <DiagnoseListTemplate/>
      </PageWrapper>
    );
  }
}
