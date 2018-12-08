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

class AdminDiagnosisTable_ extends React.Component {


  openEditForm = (e) => {
    history.push(this.props.location.pathname + "/formular/" + e)
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
                          icon={"trash"}
                        />
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
