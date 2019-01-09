import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";

export class AdminPageFooter extends Component {
  render() {
    return (
      <Layout className="footer">
        <Column md={4} xs={11}>
          <Heading level={6} >Admin module</Heading>
        </Column>
      </Layout>
    );
  }
}
