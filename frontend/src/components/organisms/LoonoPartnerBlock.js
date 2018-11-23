import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const LoonoPartnerBlock = () => (
  <Layout className="wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={9} md={9} sm={12} xs={12}>
        <Row>
          <Column lg={8} md={8} sm={8} xs={12} className={"mb-3"}>
            <Heading level={3} className="part-sub blue-text">Loono</Heading>
            <Paragraph className={"pb-4 text-justify"}>
              Jedním z našich největších partnerů je Loono. Tým mladých lékařů, studentů lékařských fakult a jiných
              nadšenců, kteří lidem ukazují, že na zdraví a prevenci záleží. Pořádají pravidelně workshopy a na jejich
              webových stránkách se každý pohodlně dozví například to, jak si provést samovyšetření prsou nebo varlat.
              Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui ofñcia deserunt mollit anim id est laborum. Nullam sit
              amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </Paragraph>
          </Column>
          <Column lg={4} md={4} sm={4} xs={12} className={"mb-3"}>
            <Image src = "/static/img/loonopartner.png" className={"img-fluid rounded-circle"}/>
          </Column>
        </Row>
      </Column>
    </Row>
  </Layout>
);
