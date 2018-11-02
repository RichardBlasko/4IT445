import React from 'react';

import {Card} from "../atoms/Card/Card";
import {CardBody} from "../atoms/Card/CardBody";
import {Heading} from "../atoms/Heading";
import {Paragraph} from "../atoms/Paragraph";
import {FontIcon} from "../atoms/FontIcon";
import {Image} from "../atoms/Image";
import {CardFooter} from "../atoms/Card/CardFooter";

export const EventCard = ({id, name, date, location, img, alt}) => (
  <Card cl>
    <Image className="card-img-top" src={img} alt={alt}/>
    <CardBody>
      <Heading level={5} className="card-title">{name}</Heading>
    </CardBody>
    <CardFooter>
      <Paragraph>
        <FontIcon icon={"map-marker-alt"} className={"mr-2"}/>
        {location}
      </Paragraph>
    </CardFooter>
  </Card>
);

