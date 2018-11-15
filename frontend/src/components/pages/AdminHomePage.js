import React, { Component } from 'react';

import { AdminHomeTemplate } from '../templates/AdminHomeTemplate';
import {AdminPageWrapper} from "../organisms/AdminPageWrapper";

export class AdminHomePage extends Component {
  render() {
    return (
      <AdminPageWrapper>
        <AdminHomeTemplate
          title="#PrevenceMaSmysl"
          paragraph="Projekt na predmet 4IT445"
          />
      </AdminPageWrapper>
    );
  }
}
