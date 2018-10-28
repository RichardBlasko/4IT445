import React, {Component} from 'react';

import {StoryListTemplate} from '../templates/StoryListTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class StoryListPage extends Component {
  render() {
    return (
      <PageWrapper>
        <StoryListTemplate/>
      </PageWrapper>
    );
  }
}
