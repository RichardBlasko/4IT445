import React from 'react';

import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const TextBlock = ({children}) => (

  <Layout className="wrapper">
    <Row className={"justify-content-center mb-3"}>
      <Column lg={9} md={9} sm={12} xs={12}>
        <Heading level={3} className={"pt-2 part-sub orange-text"}>PROČ #PREVENCEMASMYSL?</Heading>
        <Row>
          <Column sm={6}>
            <Image src={'/static/img/logo2.png'} class={"img-fluid"}/>
          </Column>
          <Column sm={6}>
            <Heading level={5} className={"pb-3 blue-text"}>PROTOŽE PŘECI PREVENCE DÁVÁ SMYSL!</Heading>
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
        <Paragraph className={"pb-4 text-justify"}>
          Značné procento zjištěných karcinomů se bohužel nachází již ve třetím nebo čtvrtém (tedy nejtěžším) stadiu,
          kdy jsou vyhlídky pacientů na úplné vyléčení výrazně snížené! Všechny tyto nepříznivé ukazatele jsou ve
          vyspělých zemích Evropy na mnohem nižších hodnotách, a to právě díky celoplošně organizovaným screeningovým
          programům, které ročně navštíví až 90 procent cílové populace.
        </Paragraph>
        <Paragraph className={"pb-4 text-justify"}>
          V Česku jsou preventivní prohlídky velmi podceňované, pravidelně je využívá pouze 20 procent obyvatel. To je
          také jedním z důvodů, proč na kardiovaskulární a nádorová onemocnění umíráme častěji než v zemích západní
          Evropy, přestože úroveň zdravotní péče je srovnatelná a rozsah preventivní prohlídek je širší než v okolních
          zemích. Až 60 procent lidí uvažuje tak, že pokud je nic netrápí, nemají potřebu chodit k lékaři… Z
          dlouhodobých lékařských statistik je přitom zcela zřejmé, že prevence má skutečně zásadní význam. Jestliže se
          nemoc zachytí včas, pacient má obvykle 95procentní šanci na vyléčení
        </Paragraph>
      </Column>
    </Row>
  </Layout>
);
