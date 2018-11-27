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
              Jedním z našich největších partnerů je Loono. Tým mladých lékařů, studentů lékařských fakult a jiných nadšenců, kteří lidem ukazují, že na zdraví a prevenci záleží. V Loono ukazujou, jak je prevence důležitá. Pořádají vzdělávací workshopy a přednášky, píšeme články a natáčíme videa. O zdraví a těle mluví srozumitelně, nestraší děsivými statistikami a inspirují ostatní, aby se o sebe starali rádi a zavčas. Skrze projekty #Prsakoule, ŽIJEŠ SRDCEM, Pravda o... ukazují, že na zdraví a prevenci záleží. Chtejí, aby těch vyškolených, kteří myslí na své zdraví a pečují o své tělo bylo mnohem více. Jejích cílem je proto v následujícím roce naučit více než 50 000 lidí, jak se správně starat o svoje #prsakoule a srdce. Rozrostli  se už do pěti měst Česka – Praha, Brno, Hradec Králové, Olomouc a Plzeň.
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
