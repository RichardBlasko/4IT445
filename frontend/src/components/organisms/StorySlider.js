import React from 'react';

import {Layout} from '../atoms/Layout';
import {StoryCard} from "../molecules/StoryCard";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";

export const StorySlider = ({children}) => (
  <Layout className="wrapper pb-5">
    <Heading level={4} className={"part-headline"}>Příběhy pacientů</Heading>
    <Row className={"justify-content-center mb-3"}>
      <Column lg={5} md={5} sm={12} xs={12}>
        <StoryCard
          id={1}
          diagnose={"Rakovina tlustého střeva"}
          person={"Ivana, 56 let"}
          story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
          img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
        />
      </Column>
      <Column lg={5} md={5} sm={12} xs={12}>
        <StoryCard
          id={2}
          diagnose={"Rakovina tlustého střeva"}
          person={"Petr, 56 let"}
          story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
          img={"https://images.pexels.com/photos/1509340/pexels-photo-1509340.jpeg?cs=srgb&dl=care-close-up-first-aid-1509340.jpg&fm=jpg"}
        />
      </Column>
    </Row>
    <Row className={"justify-content-center mb-3"}>
      <NavLink exact to="/pribehy">
        <Button title="Zobrazit všechny příběhy" variant="all"/>
      </NavLink>
    </Row>
  </Layout>
);
