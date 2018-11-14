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
import ReactModal from "react-modal";
import Modal from 'react-responsive-modal';

import {AdminNavBar} from "../molecules/AdminNavBar";


import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export class AdminPreventionTable extends React.Component {
  render() {

    return (
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col" colSpan="2">Akce</th>
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
                      <td><FontIcon icon={"edit"}/></td>
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
