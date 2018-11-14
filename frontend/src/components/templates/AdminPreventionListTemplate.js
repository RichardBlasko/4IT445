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
import {AdminPreventionListBlock} from "../organisms/AdminPreventionListBlock";


import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';


export class AdminPreventionListTemplate extends React.Component {
  render() {

    return (
        <Layout className="page-background">
          <Layout className="page-background-overlay">
            <AdminNavBar/>
            <AdminPreventionListBlock/>
          </Layout>
      </Layout>
    )
  }
}
