import React, { Component } from 'react';

import { AdminPartnersFormTemplate } from '../templates/AdminPartnersFormTemplate';

export class AdminPartnersFormPage extends Component {
  render() {
    return (
      <AdminPartnersFormTemplate
        title="Pridej diagnozu"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
