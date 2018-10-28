import React, { Component } from 'react';

import { AdminHomeTemplate } from '../templates/AdminHomeTemplate';

export class AdminHomePage extends Component {
  render() {
    return (
      <AdminHomeTemplate
        title="#PrevenceMaSmysl"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
