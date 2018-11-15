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

export class AdminPreventionTable extends React.Component {
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
                        <Link to="/admin/Prevenceformular">
                          <FontIcon icon={"edit"}/>
                        </Link>
                      </td>
                      <td><FontIcon icon={"times"}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
    )
  }
}
