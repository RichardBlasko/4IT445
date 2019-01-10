import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {ReasonCard} from "../molecules/ReasonCard";

export const ReasonSlider = ({children}) => (
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
                  <Column lg={6} md={6} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard
                      reason={"Nic to nestojí"}
                      icon={"hand-holding-usd"}
                      text={"Proč nevyužívat to, co je zcela zdarma a máme na to nárok? Pacient má na preventivní prohlídku zákonný nárok. Lékař ale nemá povinnost svého pacienta na prevence zvát. Lékař ale vede přesnou evidenci, kdy na ni pacient naposledy byl. Buďte aktivní a ptejte se."}
                    />
                  </Column>
                  <Column lg={6} md={6} sm={6} xs={12} className={"mb-3"}>
                    <ReasonCard
                      reason={"Včasné odhalení zvyšuje šance"}
                      icon={"chart-line"}
                      text={"Preventivní prohlídky mají klíčový význam ve snížení rizika výskytu závažných onemocnění i nákladů na následnou léčbu. Včasné odhalení příznaků závažného onemocnění navíc zvyšuje šance na úplné vyléčení"}
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
