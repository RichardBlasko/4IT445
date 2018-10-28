import React, { Component } from 'react';

import { AboutTemplate } from '../templates/AboutTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class AboutPage extends Component {
  render() {
    return (
      <PageWrapper>
      <AboutTemplate
        title="#PrevenceMaSmysl"
        paragraph="Projekt na predmet 4IT445"
      />
      </PageWrapper>
    );
  }
}
