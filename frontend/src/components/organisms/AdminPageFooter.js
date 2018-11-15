import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {InputWithLabel} from "../molecules/InputWithLabel";
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {FontIcon} from "../atoms/FontIcon";
import {NavLink} from "../atoms/Nav/NavLink";
import {Column} from "../atoms/Column";
import {List} from "../atoms/List/List";
import {ListItem} from "../atoms/List/ListItem";
import {Image} from "../atoms/Image";

export class AdminPageFooter extends Component {
  render() {
    return (
      <Layout className="footer ">
        <Column md={4} xs={11} >
          <Image src={"/static/img/logo09.png"} alt={"Logo"} className={"img-fluid"}/>
          <Heading level={5} >Admin module</Heading>
        </Column>
      </Layout>
    );
  }
}
