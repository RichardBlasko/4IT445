import React from 'react';

import { Layout } from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {ReasonCard} from "../molecules/ReasonCard";

export const ReasonSlider = ({ children }) => (
  <Layout className="wrapper  pb-5">
    <Heading level={4} className={"part-headline"}>Proč je prevence důležitá?</Heading>
    <Row className={"reason"}>
      <Column lg={3} md={3} sm={6} xs={12}>
        <ReasonCard
          reason={"Nic to nestojí"}
          icon={"hand-holding-usd"}
          text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto. Zde pak také bude další text o tom jak je tento důvod důležitý a proč by se měl zde uvádět."}
        />
      </Column>
      <Column lg={3} md={3} sm={6} xs={12}>
        <ReasonCard
          reason={"Včasné odhalení zvyšuje šance"}
          icon={"chart-line"}
          text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto. Zde pak také bude další text o tom jak je tento důvod důležitý a proč by se měl zde uvádět."}
        />
      </Column>
      <Column lg={3} md={3} sm={6} xs={12}>
        <ReasonCard
          reason={"Zdraví máme jenom jedno"}
          icon={"heartbeat"}
          text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto. Zde pak také bude další text o tom jak je tento důvod důležitý a proč by se měl zde uvádět."}
        />
      </Column>
      <Column lg={3} md={3} sm={6} xs={12}>
        <ReasonCard
          reason={"Pro vlastní klid"}
          icon={"hand-holding-heart"}
          text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto. Zde pak také bude další text o tom jak je tento důvod důležitý a proč by se měl zde uvádět."}
        />
      </Column>
    </Row>
  </Layout>
);
