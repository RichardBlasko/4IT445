import React, { Component } from 'react';

import { AdminDiagnosisEditFormTemplate } from '../templates/AdminDiagnosisEditFormTemplate';

export class AdminDiagnosisEditFormPage extends Component {
  render() {
    return (
      <AdminDiagnosisEditFormTemplate
        title="Pridej diagnozu"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
