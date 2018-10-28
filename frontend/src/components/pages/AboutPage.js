import React, { Component } from 'react';

import { AboutTemplate } from '../templates/AboutTemplate';

export class AboutPage extends Component {
  render() {
    return (
      <AboutTemplate
        title="#PrevenceMaSmysl"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
