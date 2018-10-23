import React, { Component } from 'react';

import { HomeTemplate } from '../templates/HomeTemplate';

export class HomePage extends Component {
  render() {
    return (
      <HomeTemplate
        title="#PrevenceMaSmysl"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
