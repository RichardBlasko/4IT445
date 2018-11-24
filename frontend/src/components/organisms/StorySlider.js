import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";
import {StoryCard} from "../molecules/StoryCard";
import {FontIcon} from "../atoms/FontIcon";

export const StorySlider = ({children}) => (
  <Layout className="part-55 wrapper pb-5">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Layout className="container70">
          <Layout className="center-wrapper">
            <Row>
              <Column lg={4} md={4} sm={12} xs={12}>
                <Heading level={3} className="part-head2355">Za 5 minut 12</Heading>
                <Heading level={4} className="part-sub2355">Příběhy těch, kterým prevence zachránila život</Heading>
                <NavLink className="storieslink" exact to="/pribehy">
                  Zobrazit všechny příběhy
                </NavLink>
              </Column>
              <Column lg={8} md={8} sm={12} xs={12}>
                <Row>
                <Column lg={1} md={1} sm={1} xs={1} className={"text-center"}>
                  <Layout className={"mt-3"}>
                    <FontIcon icon={"chevron-left"} className={"slider-navigator mr-5 mt-2"}/>
                  </Layout>
                </Column>
                <carousel>
                  <Column lg={5} md={5} sm={10} xs={10} className={"mb-3 storySlider"}>
                    <StoryCard
                      id={1}
                      diagnose={"Rakovina tlustého střeva"}
                      person={"Ivana"}
                      age ={"56"}
                      story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
                      img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
                    />
                  </Column>
                  <Column lg={5} md={5} sm={10} xs={10} className={"mb-3 storySlider"}>
                    <StoryCard
                      id={1}
                      diagnose={"Rakovina tlustého střeva"}
                      person={"Ivana"}
                      age ={"56"}
                      story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
                      img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
                    />
                  </Column>
                  <Column lg={1} md={1} sm={1} xs={1} className={"text-center"}>
                    <Layout className={"mt-3"}>
                      <FontIcon icon={"chevron-right"} className={"slider-navigator ml-5 mt-2"}/>
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
