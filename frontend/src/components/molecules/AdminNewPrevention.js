import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {AddPreventionForm} from '../molecules/AddPreventionForm'

export class AdminNewPrevention extends Component {

  render() {
    return (
          <Row className={"justify-content-center"}>
            <Column lg={12} md={12} sm={12} xs={12}>
                <Layout className=" col-md-12 col-xs-12 card-radius grey-light p-4">
                  <Heading level={2} className={"pb-3"}>
                    Nová prevence
                  </Heading>
                  <AddPreventionForm/>
                </Layout>
            </Column>
          </Row>
    )
  }
}
