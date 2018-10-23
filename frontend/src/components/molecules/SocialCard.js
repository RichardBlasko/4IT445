import React from 'react';

import {Card} from "../atoms/Card/Card";
import {Column} from "../atoms/Column";
import {CardBody} from "../atoms/Card/CardBody";
import {FontIcon} from "../atoms/FontIcon";
import {Image} from "../atoms/Image";

export const SocialCard = ({id, author, type, img}) => (
  <Column lg={3} md={3} sm={4} xs={12}>
    <Card className={"m-2"}>
      <Image className="card-img-top" src={img} alt="Příspěvěk ze sociální sítě"/>
      <CardBody>
        @{author}
        <FontIcon icon={type} variant={"b"} className={"float-right pr-1 pt-1"}/>
      </CardBody>
    </Card>
  </Column>
);

