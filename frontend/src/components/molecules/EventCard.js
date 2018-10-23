import React from 'react';

import {Card} from "../atoms/Card/Card";
import {Column} from "../atoms/Column";
import {CardBody} from "../atoms/Card/CardBody";
import {Heading} from "../atoms/Heading";
import {Paragraph} from "../atoms/Paragraph";
import {FontIcon} from "../atoms/FontIcon";
import {Image} from "../atoms/Image";

export const EventCard = ({id, name, date, location, img, alt}) => (
  <Column lg={2} md={2} sm={4} xs={4} className={"p-4"}>
    <Card>
      <Image className="card-img-top" src={img} alt={alt}/>

      <CardBody>
        <Heading level={5} className="card-title">{name}</Heading>
        <Paragraph>
          <FontIcon icon={"map-marker-alt"} className={"mr-2"}/>
          {location}
          </Paragraph>
      </CardBody>
    </Card>
  </Column>
);

