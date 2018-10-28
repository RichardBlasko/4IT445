import React, {Component} from 'react';

import {HomeTemplate} from '../templates/HomeTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class HomePage extends Component {
  render() {
    return (
      <PageWrapper>
        <HomeTemplate
          title="#PrevenceMaSmysl"
          paragraph="Projekt na predmet 4IT445"
        />
      </PageWrapper>
    );
  }
}
