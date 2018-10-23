import React from 'react';

import {Image} from "../atoms/Image";
import {Column} from "../atoms/Column";

export const SupporterCard = ({ alt, img}) => (
  <Column lg={2} md={2} sm={3} xs={4}>
    <Image alt={alt} className="img-fluid img-center m-3" src={img}/>
  </Column>
);
