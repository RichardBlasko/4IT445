import React, { Component } from 'react';

import { AdminPreventionFormTemplate } from '../templates/AdminPreventionFormTemplate';

export class AdminPreventionFormPage extends Component {
  render() {
    return (
      <AdminPreventionFormTemplate
        title="Pridej prevenci"
        paragraph="Projekt na predmet 4IT445"
      />
    );
  }
}
