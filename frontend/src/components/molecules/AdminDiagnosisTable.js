import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {Paragraph} from "../atoms/Paragraph";
import {Button} from "../atoms/Button/Button";
import { Link } from '../atoms/Link';

import {FontIcon} from "../atoms/FontIcon";

import api from '../../api';
import {AdminNavBar} from "../molecules/AdminNavBar";

export class AdminDiagnosisTable extends React.Component {
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
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{nazevDiagnoza}</td>
                      <td>
                        <Link to="/admin/Diagnózy/formular">
                          <FontIcon icon={"edit"}/>
                        </Link>
                      </td>
                      <td>
                        <FontIcon
                          icon={"times"}
                          onClick={(values, actions) => {
                            values.nazevDiagnoza = nazevDiagnoza;
                            values.popisDiagnoza = popisDiagnoza;
                            console.log(values);
                            api.post('http://dev.backend.team03.vse.handson.pro/api/diagnozy', values)
                              .then(({ data }) => {
                                console.log('-> data', data);
                              })
                            }}
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
