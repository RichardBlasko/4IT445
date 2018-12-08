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

import history from '../../history.js';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

class AdminPartnersTable_ extends React.Component {

  openEditForm = (e) => {
    history.push(this.props.location.pathname + "/formular/" + e)
  }

  render() {
    const { partneri } = this.props;

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
                partneri.map(partneri => {
                    const { id, nazevPartner,popisPartner,odkazPartner,logoPartner,obrazokPartner,idDiagnoza } = partneri;

                  return (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{nazevPartner}</td>

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

const Page = props => <AdminPartnersTable_ {...props} />

export const AdminPartnersTable = compose(withRouter)(Page)
