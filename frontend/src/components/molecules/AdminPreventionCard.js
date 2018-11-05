import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {Paragraph} from "../atoms/Paragraph";
import {Button} from "../atoms/Button/Button";

import {AdminNewPrevention} from '../molecules/AdminNewPrevention'
import {PREVENTIONS} from "../../mocks/Preventions";
import {FontIcon} from "../atoms/FontIcon";
import ReactModal from "react-modal";
import Modal from 'react-responsive-modal';

export class AdminPreventionCard extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }

  openHandler = () => {
    const {isOpen} = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    // const {preventions} = this.props;
    const {isOpen} = this.state;

    return (
      <Row className={"justify-content-center pt-2 mb-3"}>
        <Layout className={"col-md-10 col-xs-11 card-radius grey-light p-4"}>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col" colSpan="3">Akce</th>
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
                      <td><FontIcon icon={"plus"} onClick={()=>this.openHandler()}/></td>
                      <td><FontIcon icon={"edit"}/></td>
                      <td><FontIcon icon={"minus"}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Layout>
          <ReactModal className="my-modal justify-content-center"
            isOpen= {isOpen}
          >
          <Button  variant="read" type="submit" onClick={()=>this.openHandler()}>
            <FontIcon  icon={"times"}/></Button>
              <AdminNewPrevention/>
          </ReactModal>
      </Row>

    )
  }
}
