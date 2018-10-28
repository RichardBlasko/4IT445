import React from 'react';

import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";

export const TextBlock = ({children}) => (

  <Layout className="wrapper">
      <Row className={"justify-content-center mb-3"}>
      <Column lg={10} md={10} sm={12} xs={12}>
      <Heading level={5} className={"pt-2"}>PROČ #PREVENCEMASMYSL?</Heading>
      <Heading level={6} className={"pb-3"}>PROTOŽE PŘECI PREVENCE DÁVÁ SMYSL!</Heading>
      <Paragraph className={"pb-4 text-justify"}>
        Slovo PREVENCE, které znamená něčemu přecházet… Měla by zahrnovat především naši osobní snahu žít zdravě
        tak, abychom nemuseli následně podstupovat složitou, mnohdy zdlouhavou cestu zpět ke zdraví, které jsme
        poztráceli někde na cestě životem. Tak by měl vypadat ideál slova prevence – skutečně předcházet tomu,
        abychom vůbec onemocněli. V dnešním světě je tomu však trochu naopak. Prevencí obecně se v našem hektickém
        stylu života zpravidla myslí odhalení toho, zda již náhodou nějakou nemocí v zárodku netrpíme… Ale i to se
        počítá a často nám tato snaha úřadů, institucí i samotných lékařů může zachránit (a zachraňuje) život. Je
        však jen na našich bedrech, zda budeme vůči sobě a svému zdraví zodpovědní…
      </Paragraph>
      </Column>
      </Row>
  </Layout>
);
