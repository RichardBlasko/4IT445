import React, { Component } from 'react';

import { PartnersTemplate } from '../templates/PartnersTemplate';
import {PageWrapper} from "../organisms/PageWrapper";

export class PartnersPage extends Component {
  render() {
    return (
      <PageWrapper>
      <PartnersTemplate
        title="#PrevenceMaSmysl"
        paragraph="Projekt na predmet 4IT445"
      />
      </PageWrapper>
    );
  }
}
