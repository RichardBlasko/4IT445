import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";
import {FontIcon} from "../atoms/FontIcon";
import {EventCard2} from "../molecules/EventCard2";

import {EVENTS} from "../../mocks/Events";

export const EventSlider2 = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange ">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
            <Row>
              <Column lg={3} md={3} sm={12} xs={12}>
                <Heading level={3} className="part-head">Akce</Heading>
                <Heading level={4} className="part-sub blue-text">Cesta k prevenci</Heading>
              </Column>
              <Column lg={9} md={9} sm={12} xs={12}>
                <Row className={"row-eq-height"}>
                  {EVENTS.map(event =>
                    <Column lg={4} md={4} sm={12} xs={12} className={"mb-3"}>
                      <EventCard2
                        id={event.id}
                        name={event.name}
                        img={event.img}
                        alt={event.alt}
                        location={event.location}
                        date={event.date}
                      />
                    </Column>)}

                </Row>
                <Row>
                  <Column lg={12} md={12} sm={12} xs={12} className={"text-center"}>
                    <Layout className={"mt-3"}>
                      <FontIcon icon={"chevron-left"} className={"slider-navigator mr-5 mt-2 white-text"}/>
                      <NavLink exact to="/">
                        <Button title="Zobrazit všechny akce" variant="all mt-m-2"/>
                      </NavLink>
                      <FontIcon icon={"chevron-right"} className={"slider-navigator ml-5 mt-2 white-text"}/>
                    </Layout>
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
