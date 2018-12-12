import React from 'react';

import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {Paragraph} from "../atoms/Paragraph";
import {Button} from "../atoms/Button/Button";
import { Link } from '../atoms/Link';

import history from '../../history.js';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import {FontIcon} from "../atoms/FontIcon";

import api from '../../api';
import {AdminNavBar} from "../molecules/AdminNavBar";

import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class AdminDiagnosisTable_ extends React.Component {

  constructor () {
      super();
      this.state = {
        showModal: false,
        diagnoza: null
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  handleOpenModal = (e) => {
    console.log(e);
    this.setState({ showModal: true, diagnoza: e });

  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  openEditForm = (e) => {
    history.push(this.props.location.pathname + "/formular/" + e)
  }

  openAlert = (e) => {
    alert('Diagnóza ' + e + ' úspešne odstránená.')
  }

  render() {
    const { diagnozy } = this.props;

    return (
          <table className="table table-bordered">
            <thead className="blue">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Název</th>
                <th scope="col" colSpan="2">Akce</th>
              </tr>
            </thead>
            <tbody className="orange">
              {
                diagnozy.map(diagnozy => {
                    const { id, nazevDiagnoza, popisDiagnoza } = diagnozy;

                  return (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{nazevDiagnoza}</td>
                      <td>
                          <FontIcon
                            style={{ cursor: "pointer"}}
                            onClick={e => this.openEditForm(id)}
                            icon={"edit"}
                          />
                      </td>
                      <td>
                        <FontIcon
                          style={{ cursor: "pointer"}}
                          //onClick={e => this.handleOpenModal}
                          onClick={e => this.handleOpenModal(nazevDiagnoza)}
                          icon={"trash"}
                        />
                          <ReactModal
                            isOpen={this.state.showModal}
                            contentLabel={this.state.diagnoza}
                            className="Modal"
                            overlayClassName="Overlay"
                            shouldCloseOnEsc={true}
                            shouldReturnFocusAfterClose={true}
                          >
                            <Button
                              onClick={this.handleCloseModal}
                              variant="admin"
                              type="submit"
                            >
                              <FontIcon  icon={"times"}/>
                            </Button>
                            <Heading level={1} className={"pb-3"}></Heading>
                            <Heading level={3} className={"pb-3"}>{this.state.diagnoza}</Heading>
                            <Heading level={6} className={"pb-3"}>Naozaj si prajete odstrániť diagnózu?</Heading>
                            <Heading level={6} className={"pb-3"}></Heading>
                            <Button
                              variant="admin"
                              className="float-right"
                              onClick={this.handleCloseModal}>
                              Odstrániť
                            </Button>
                          </ReactModal>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
    )
  }
}

const Page = props => <AdminDiagnosisTable_ {...props} />
export const AdminDiagnosisTable = compose(withRouter)(Page)
