import React, {Component} from 'react';

import {EventListTemplate} from '../templates/EventListTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class EventListPage extends Component {
  render() {
    return (
      <PageWrapper>
        <EventListTemplate/>
      </PageWrapper>
    );
  }
}
