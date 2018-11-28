import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const LprPartnerBlock = () => (
  <Layout className="wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={9} md={9} sm={12} xs={12}>
        <Row>
          <Column lg={8} md={8} sm={8} xs={12} className={"mb-3"}>
            <Heading level={3} className="part-sub blue-text">Liga proti rakovině Praha</Heading>
            <Paragraph className={"pb-4 text-justify"}>
            Liga proti rakovině Praha je nezisková organizace, která byla založena
            již v roce 1990. Členy jsou nejen onkologičtí pacienti a jejich rodinní
             příslušníci, ale i občané s humanitárním cítěním a zdravotníci. Více než
              60 onkologických pacientských organizací z celé republiky jsou kolektivními
              členy. Vzájemnou informovanost umožňuje periodicky vydávaný Zpravodaj.
              Liga je členem mezinárodních organizací ECL a UICC.
            Naší snahou je snížení úmrtnosti na nádorová onemocnění v České republice.
            K dosažení tohoto cíle jsme vytyčili tři hlavní dlouhodobé programy:
            soustavné informování veřejnosti o nádorové prevenci,
            snaha o zlepšení kvality života onkologicky nemocných,
            podpora onkologického výzkumu, kvalitní výuky a investiční modernizace
            či kompletizace onkologických pracovišť.
            </Paragraph>
          </Column>
          <Column lg={4} md={4} sm={4} xs={12} className={"mb-3"}>
            <Image src = "/static/img/lprpartner.png" className={"img-fluid rounded-circle"}/>
          </Column>
        </Row>
      </Column>
    </Row>
  </Layout>
);
