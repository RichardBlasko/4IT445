import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';
import {TextareaWithLabel} from "./TextareaWithLabel";
import {InputWithLabel} from "./InputWithLabel";
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {FontIcon} from "../atoms/FontIcon";

export class PageFooter extends Component {
  render() {
    return (
      <Layout className="footer pt-5">
        <Row className={"justify-content-center mb-3"}>
          <Layout className="col-md-5">
            <Heading level={5} className={"pb-3"}>Podělte se s námi o Vaše příběhy</Heading>
            <form>
              <Row>
                <Layout className="col-md-6">
                  <InputWithLabel
                    id="name"
                    label="Jméno"
                    placeholder="Vaše jméno"
                  />
                </Layout>
                <Layout className="col-md-6">
                  <InputWithLabel
                    id="email"
                    label="Email"
                    placeholder="Váš email"
                    type="email"
                  />
                </Layout>
              </Row>
              <TextareaWithLabel
                id="message"
                label="Zpráva"
              />
              <Button title="Odeslat zprávu" variant="all" type="submit" className={"mb-3"}/>
            </form>
          </Layout>
          <Layout className="col-md-5">
            <Heading level={5} className={"pt-2"}>PROČ #PREVENCEMASMYSL?</Heading>
            <Heading level={6} className={"pb-3"}>PROTOŽE PŘECI PREVENCE DÁVÁ SMYSL.</Heading>
            <Paragraph className={"pb-4 text-justify"}>
              Slovo PREVENCE, které znamená něčemu přecházet… Měla by zahrnovat především naši osobní snahu žít zdravě tak, abychom nemuseli následně podstupovat složitou, mnohdy zdlouhavou cestu zpět ke zdraví, které jsme poztráceli někde na cestě životem. Tak by měl vypadat ideál slova prevence – skutečně předcházet tomu, abychom vůbec onemocněli. V dnešním světě je tomu však trochu naopak. Prevencí obecně se v našem hektickém stylu života zpravidla myslí odhalení toho, zda již náhodou nějakou nemocí v zárodku netrpíme… Ale i to se počítá a často nám tato snaha úřadů, institucí i samotných lékařů může zachránit (a zachraňuje) život. Je však jen na našich bedrech, zda budeme vůči sobě a svému zdraví zodpovědní…
            </Paragraph>
            <Layout className={"float-right"}>
              <ListInline className={""}>
                <ListInlineItem>PŘÍBĚHY</ListInlineItem>
                <ListInlineItem>#PREVENCEMASMYSL</ListInlineItem>
                <ListInlineItem>PREVENCE</ListInlineItem>
                <ListInlineItem>DIAGNÓZY</ListInlineItem>
                <ListInlineItem>O PROJEKTU</ListInlineItem>
              </ListInline>
            </Layout>
              <Layout className={"float-right"}>
              <ListInline className={"social-network-footer"}>
                <ListInlineItem><FontIcon variant={"b"} icon={'facebook'}/></ListInlineItem>
                <ListInlineItem><FontIcon variant={"b"} icon={'twitter'}/></ListInlineItem>
                <ListInlineItem><FontIcon variant={"b"} icon={'instagram'}/></ListInlineItem>
              </ListInline>
              </Layout>
          </Layout>
        </Row>
        <Paragraph className={"text-center"}>© #PrevenceMaSmysl {new Date().getFullYear()}</Paragraph>
      </Layout>
    );
  }
}
