import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const StkPartnerBlock = () => (
  <Layout className="wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={9} md={9} sm={12} xs={12}>
        <Row>
          <Column lg={8} md={8} sm={8} xs={12} className={"mb-3 order-md-2"}>
            <Heading level={3} className="part-sub blue-text">STK pro chlapy</Heading>
            <Paragraph className={"pb-4 text-justify"}>
              Nadační fond Petra Koukala v rámci svých osvětových aktivit připravil
              pro studenty středních škol přednáškovou roadshow „STK pro chlapy“.
              Zatím jsme s přednášky zavítali do Brna, kde jsme přednášeli celkem
              třikrát a přednášek se zúčastnilo více jak 600 žáků! Druhá zastávka
              se konala v hlavním městě, kdy do Pražského kina Světozor zavítalo
              přes 400 studentů. Celkem za dvě zastávky naší roadshow prošlo osvětovým
               programem nad 1000 středoškoláků. Hlavním cílem projektu je oslovit mladé
                muže a přimet je k většímu zájmu o vlastní zdraví.
            </Paragraph>
          </Column>
          <Column lg={4} md={4} sm={4} xs={12} className={"mb-3  order-md-1"}>
            <Image src="/static/img/stkpartner.jpg" className={"img-fluid rounded-circle"}/>
          </Column>
        </Row>
      </Column>
    </Row>
  </Layout>
);
