import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {ReasonCard2} from "../molecules/ReasonCard2";

export const ReasonSlider2 = ({children}) => (
  <Layout className="part-55 wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
            <Row>
              <Column lg={3} md={3} sm={12} xs={12} className={"text-right order-md-2"}>
                <Heading level={3} className="part-head orange-text">Proč?</Heading>
                <Heading level={4} className="part-sub blue-text">Prevence má smysl</Heading>
              </Column>
              <Column lg={9} md={9} sm={12} xs={12} className={"text-right order-md-1"}>
                <Row>
                  <Column lg={4} md={4} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard2
                      reason={"Nic to nestojí"}
                      icon={"hand-holding-usd"}
                      text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto."}
                    />
                  </Column>
                  <Column lg={4} md={4} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard2
                      reason={"Včasné odhalení zvyšuje šance"}
                      icon={"chart-line"}
                      text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto."}
                    />
                  </Column>
                  <Column lg={4} md={4} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard2
                      reason={"Pro vlastní klid"}
                      icon={"hand-holding-heart"}
                      text={"Tento důvod je důležitý proto a proto. Velmi důležity je tento důvod. Pomůže vám předejít tomu a tomu. A je důležitý proto a proto."}
                    />
                  </Column>
                </Row>
              </Column>
            </Row>
          </Layout>
        </Layout>
      </Column>
    </Row>
  </Layout>
);
