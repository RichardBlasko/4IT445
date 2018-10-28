import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const WhoBlock = () => (
  <Layout className="wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={9} md={9} sm={12} xs={12}>
            <Row>
                <Column lg={7} md={7} sm={7} xs={12} className={"mb-3 order-md-2"}>
                  <Heading level={3} className="part-sub blue-text">Kdo se o #prevencemasmysl stará?</Heading>
                  <Heading level={5} className="orange-text">Bylo na čase už něco změnit, muže to totiž potkat kohokoli z nás</Heading>
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
              <Column lg={5} md={5} sm={5} xs={12} className={"mb-3  order-md-1"}>
                <Image src = "/static/img/kto.jpg" className={"img-fluid"}/>
              </Column>
            </Row>
      </Column>
    </Row>
  </Layout>
);
