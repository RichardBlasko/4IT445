import PropTypes from 'prop-types';
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
import ContactForm from "../molecules/ContactForm";

export class PageFooter extends Component {
  render() {
    return (
      <Layout className="footer pt-5">
        <Row className={"justify-content-center mb-3"}>
          <Column md={4} xs={11} className={"order-md-1"}>
            <Heading level={5} className={"pb-3"}>Podělte se s námi o Vaše dotazy</Heading>
            <ContactForm env={this.props.env} />
          </Column>
          <Column md={4} xs={11} className={"footer-menu order-md-3"}>
            <Heading level={5} className={"pt-2"}>PROČ #PREVENCEMASMYSL?</Heading>
            <Heading level={6} className={"pb-3"}>PROTOŽE PŘECI PREVENCE DÁVÁ SMYSL!</Heading>
            <Paragraph className={"pb-4 text-justify"}>
              Budeme vůči sobě a svému zdraví zodpovědní!
            </Paragraph>
            <Layout className={"float-right"}>
              <ListInline className={"social-network-footer"}>
                <ListInlineItem><FontIcon variant={"b"} icon={'facebook'}/></ListInlineItem>
                <ListInlineItem><FontIcon variant={"b"} icon={'twitter'}/></ListInlineItem>
                <ListInlineItem><FontIcon variant={"b"} icon={'instagram'}/></ListInlineItem>
              </ListInline>
            </Layout>
          </Column>
          <Column md={2} xs={11} className={"footer-menu order-md-2"}>
            <Heading level={5} className={"pb-3 ml-2"}>Menu</Heading>
            <Row>
              <Column md={12} xs={6}>
                <List className={""}>
                  <ListItem>
                    <NavLink exact to="/pribehy">
                      PŘÍBĚHY
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink exact to="/socialnisite">
                      #PREVENCEMASMYSL
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink exact to="/prevence">
                      PREVENCE
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink exact to="/kalendar">
                      KALENDÁŘ
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink exact to="/diagnozy">
                      DIAGNÓZY
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink exact to="/partneri">
                      PARTNEŘI
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink exact to="/projekt">
                      O PROJEKTU
                    </NavLink>
                  </ListItem>
                </List>
              </Column>
              <Column md={12} xs={6}>
                <Image src={"/static/img/logo2B.png"} alt={"Logo"} className={"img-fluid"}/>
              </Column>
            </Row>
          </Column>
        </Row>
        <Paragraph className={"text-center"}>© #PrevenceMaSmysl {new Date().getFullYear()}</Paragraph>
      </Layout>
    );
  }
}

PageFooter.propTypes = {
  env: PropTypes.object.isRequired
};
