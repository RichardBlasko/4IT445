import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const WhyBlock = ({children}) => (
  <Layout className="part-55 wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
                <Row>
                  <Column lg={6} md={6} sm={6} xs={12} className={" mb-3"}>
                    <Heading level={5} className="orange-text">Protože věříme, že je lepší trávit čas s rodinou než po doktorech</Heading>
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
                  <Column lg={6} md={6} sm={6} xs={12} className={"mb-3"}>
                    <Image src="/static/img/family2.jpg"/>
                  </Column>
            </Row>
          </Layout>
        </Layout>
      </Column>
    </Row>
  </Layout>
);
