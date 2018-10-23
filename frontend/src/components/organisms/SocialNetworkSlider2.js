import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {SocialCard2} from "../molecules/SocialCard2";
import {FontIcon} from "../atoms/FontIcon";

import {SOCIALS} from "../../mocks/Socials";

export const SocialNetworkSlider2 = ({children}) => (
  <Layout className="part-55 wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
            <Row>
              <Column lg={3} md={3} sm={12} xs={12} className={"text-right order-md-2"}>
                <Heading level={3} className="part-head orange-text">Svět</Heading>
                <Heading level={4} className="part-sub blue-text">#PrevenceMaSmysl</Heading>
              </Column>
              <Column lg={9} md={9} sm={12} xs={12} className={"order-md-1"}>
                <Row>
                  {
                    SOCIALS.map(item =>
                      <Column lg={4} md={4} sm={12} xs={12} className={"mb-2"}>
                        <SocialCard2
                          id={item.id}
                          img={item.img}
                          author={item.author}
                          type={item.type}
                        />
                      </Column>)
                  }

                </Row>
                <Row>
                  <Column lg={12} md={12} sm={12} xs={12} className={"text-center"}>
                    <Layout className={"mt-3"}>
                      <FontIcon icon={"chevron-left"} className={"slider-navigator mr-5 mt-2 orange-text"}/>
                      <NavLink exact to="/">
                        <Button title="Celé #PrevenceMaSmysl" variant="all mt-m-2"/>
                      </NavLink>
                      <FontIcon icon={"chevron-right"} className={"slider-navigator ml-5 mt-2 orange-text"}/>
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
