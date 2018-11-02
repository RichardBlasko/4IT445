import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {Paragraph} from "../atoms/Paragraph";
import {Button} from "../atoms/Button/Button";

import {PREVENTIONS} from "../../mocks/Preventions";
import {FontIcon} from "../atoms/FontIcon";

export class AdminPreventionCard extends React.Component {

  render() {
    // const {preventions} = this.props;

    return (
      <Row className={"justify-content-center pt-2 mb-3"}>
        <Layout className={"col-md-10 col-xs-11 card-radius grey-light p-4"}>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col" colspan="3">Akce</th>
              </tr>
            </thead>
            <tbody>
              {
                PREVENTIONS.map(prevention => {
                  const { name, id = 1 } = prevention;
                  return (
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{name}</td>
                      <td><FontIcon icon={"plus"}/></td>
                      <td><FontIcon icon={"edit"}/></td>
                      <td><FontIcon icon={"minus"}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Layout>
      </Row>

    )
  }
}
        // <Row className={"justify-content-center pt-2 mb-3"}>
        //   <Layout className={"col-md-10 col-xs-11 card-radius grey-light p-4"}>
        //     <table class="table">
        //       <thead class="thead-light">
        //         <tr>
        //           <th scope="col">ID</th>
        //           <th scope="col">name</th>
        //           <th scope="col">Akce</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         <tr>
        //           <th scope="row">1</th>
        //           <td></td>
        //           <td>2</td>
        //         </tr>
        //         <tr>
        //           <th scope="row">2</th>
        //           <td>Jacob</td>
        //           <td>Thornton</td>
        //         </tr>
        //         <tr>
        //           <th scope="row">3</th>
        //           <td>Larry</td>
        //           <td>the Bird</td>
        //         </tr>
        //       </tbody>
        //     </table>
        //   </Layout>
        // </Row>)
