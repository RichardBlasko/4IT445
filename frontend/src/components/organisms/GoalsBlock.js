import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {ReasonCard2} from "../molecules/ReasonCard2";

export const GoalsBlock = ({children}) => (
  <Layout className="part-55 wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
            <Row>
              <Column lg={12} md={12} sm={12} xs={12} className={"text-left order-md-2"}>
                <Heading level={3} className="part-sub blue-text">Čeho chceme dosáhnout?</Heading>
              </Column>
            </Row>
            <Row>
              <Column lg={12} md={12} sm={12} xs={12} className={"text-right order-md-1"}>
                <Row>
                  <Column lg={4} md={4} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard2
                      reason={"Cíl 1"}
                      icon={"bullseye"}
                      text={"Popis cíle, kterého chce tento projekt #PrevenceMaSmysl dosáhnout. Bude to pravdepodobne vytýčení meritelného cíle. Neco jako naučit lidi chodit na preventívni prohlídky a podobne."}
                    />
                  </Column>
                  <Column lg={4} md={4} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard2
                      reason={"Cíl 2"}
                      icon={"bullseye"}
                      text={"Popis cíle, kterého chce tento projekt #PrevenceMaSmysl dosáhnout. Bude to pravdepodobne vytýčení meritelného cíle. Neco jako naučit lidi chodit na preventívni prohlídky a podobne."}
                    />
                  </Column>
                  <Column lg={4} md={4} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard2
                      reason={"Cíl 3"}
                      icon={"bullseye"}
                      text={"Popis cíle, kterého chce tento projekt #PrevenceMaSmysl dosáhnout. Bude to pravdepodobne vytýčení meritelného cíle. Neco jako naučit lidi chodit na preventívni prohlídky a podobne."}
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
