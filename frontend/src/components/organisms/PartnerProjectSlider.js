import React from 'react';
import Carousel from 'nuka-carousel';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";
import {FontIcon} from "../atoms/FontIcon";
import {EventCard} from "../molecules/EventCard";

import {EVENTS} from "../../mocks/Events";

export const PartnerProjectSlider = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange ">
    <Row className={"justify-content-center"}>
      <Heading level={3} className="part-head">Partnerské Projekty</Heading>
    </Row>
      <Row className={"justify-content-center"}>
      <Heading level={4} className="part-sub blue-text">Spolupráca je základ</Heading>
    </Row>
    <Row className={"justify-content-center"}>
    <Carousel
        autoplay={true}
        autoplayInterval={7000}
        width={"80%"}
        wrapAround = {true}
    >
      <img src="https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/mediamarket-cz-sk/1014/avon_web_fandime_zenam_cz_04_03.jpg" />
      <img src="https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/mediamarket-cz-sk/1014/avon_web_fandime_zenam_cz_04_03.jpg" />
      <img src="https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/mediamarket-cz-sk/1014/avon_web_fandime_zenam_cz_04_03.jpg" />
      <img src="https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/mediamarket-cz-sk/1014/avon_web_fandime_zenam_cz_04_03.jpg" />
      <img src="https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/mediamarket-cz-sk/1014/avon_web_fandime_zenam_cz_04_03.jpg" />
    </Carousel>
    </Row>
  </Layout>
);
