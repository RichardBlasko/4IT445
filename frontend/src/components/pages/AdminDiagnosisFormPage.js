import React, { Component } from 'react';

import { AdminDiagnosisFormTemplate } from '../templates/AdminDiagnosisFormTemplate';

export class AdminDiagnosisFormPage extends Component {
  render() {
    return (
      <AdminDiagnosisFormTemplate
        title="Pridej diagnozu"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
