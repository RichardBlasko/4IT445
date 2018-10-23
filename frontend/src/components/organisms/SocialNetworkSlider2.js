import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {SocialCard2} from "../molecules/SocialCard2";
import {FontIcon} from "../atoms/FontIcon";

export const SocialNetworkSlider2 = ({children}) => (
  <Layout className="part-55 wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
            <Row>
              <Column lg={9} md={9} sm={12} xs={12}>
                <Row>
                <Column lg={4} md={4} sm={6} xs={6}>
                  <SocialCard2
                    id={1}
                    img={"https://static.standard.co.uk/s3fs-public/thumbnails/image/2013/08/01/12/AN25554312-two-year-old-wit_2.jpg?w968"}
                    author={"HappyFather"}
                    type={"facebook"}
                  />
                </Column>
                <Column lg={4} md={4} sm={6} xs={6}>
                  <SocialCard2
                    id={1}
                    img={"https://1gr.cz/fotky/idnes/10/112/cl6/OT370d0e_koukal2.jpg"}
                    author={"PetrKoukal"}
                    type={"twitter"}
                  />
                </Column>
                <Column lg={4} md={4} sm={6} xs={6}>
                  <SocialCard2
                    id={1}
                    img={"https://www.abcr.com.au/wp-content/uploads/2017/05/Nicky-e1505449946195-690x325.jpg"}
                    author={"JanaPrijmeni"}
                    type={"facebook"}
                  />
                </Column>
                </Row>
                <Row>
                  <Column lg={12} md={12} sm={12} xs={12} className={"text-center"}>
                    <Layout className={"mt-3"}>
                      <FontIcon icon={"chevron-left"} className={"slider-navigator mr-5 mt-2 orange-text"}/>
                      <NavLink exact to="/pribehy">
                        <Button title="Objev co se skrývá pod #PrevenceMaSmysl" variant="all mt-m-2"/>
                      </NavLink>
                      <FontIcon icon={"chevron-right"} className={"slider-navigator ml-5 mt-2 orange-text"}/>
                    </Layout>
                  </Column>
                </Row>
              </Column>
              <Column lg={3} md={3} sm={12} xs={12} className={"text-right"}>
                <Heading level={3} className="part-head orange-text">Svět</Heading>
                <Heading level={4} className="part-sub blue-text">#PrevenceMaSmysl</Heading>
              </Column>
            </Row>
          </Layout>
        </Layout>
      </Column>
    </Row>
  </Layout>
);
