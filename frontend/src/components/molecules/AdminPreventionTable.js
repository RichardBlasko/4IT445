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

import {AdminNavBar} from "../molecules/AdminNavBar";

import history from '../../history.js';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

class AdminPreventionTable_ extends React.Component {

    openEditForm = (e) => {
      history.push(this.props.location.pathname + "/formular/" + e)
    }


      openAlert = (e) => {
        alert('Preventívni vyšetření ' + e + ' úspešne odstráneno.')
      }

  render() {
    const { prevence } = this.props;

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
                prevence.map(prevence => {
                    const { id, nazevPrevence, popisPrevence, duvodPrevence } = prevence;
                  return (
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{nazevPrevence}</td>
                      <td>
                          <FontIcon
                            style={{ cursor: "pointer"}}
                            onClick={e => this.openEditForm(id)}
                            icon={"edit"}
                          />
                      </td>
                      <td>
                        <FontIcon
                          style={{ padding:"1em" ,cursor: "pointer"}}
                          onClick={e => this.openAlert(nazevPrevence)}
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

const Page = props => <AdminPreventionTable_ {...props} />

export const AdminPreventionTable = compose(withRouter)(Page)
