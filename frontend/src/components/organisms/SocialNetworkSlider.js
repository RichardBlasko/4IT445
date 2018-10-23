import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";
import {Row} from "../atoms/Row";
import {SocialCard} from "../molecules/SocialCard";

export const SocialNetworkSlider = ({ children }) => (
  <Layout className="wrapper orange pb-5">
    <Heading level={4} className={"part-headline"}>#PrevenceMaSmysl</Heading>
    <Row className={"justify-content-center mb-3"}>
      <SocialCard
        id={1}
        img={"https://www.abcr.com.au/wp-content/uploads/2017/05/Nicky-e1505449946195-690x325.jpg"}
        author={"JanaPrijmeni"}
        type={"facebook"}
      />
      <SocialCard
        id={1}
        img={"https://1gr.cz/fotky/idnes/10/112/cl6/OT370d0e_koukal2.jpg"}
        author={"PetrKoukal"}
        type={"twitter"}
      />
      <SocialCard
        id={1}
        img={"https://static.standard.co.uk/s3fs-public/thumbnails/image/2013/08/01/12/AN25554312-two-year-old-wit_2.jpg?w968"}
        author={"HappyFather"}
        type={"facebook"}
      />
    </Row>
    <Row className={"justify-content-center mb-3"}>
      <NavLink exact to="/pribehy">
        <Button title="Objev co se skrývá pod #PrevenceMaSmysl" variant="all"/>
      </NavLink>
    </Row>
  </Layout>
);
