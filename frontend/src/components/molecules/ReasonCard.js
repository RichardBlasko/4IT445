import React from 'react';

import {Heading} from "../atoms/Heading";
import {Layout} from "../atoms/Layout";
import {FontIcon} from "../atoms/FontIcon";
import {Paragraph} from "../atoms/Paragraph";

export const ReasonCard = ({reason, icon, text}) => (
  <Layout>
    <Layout className={"text-center"}>
      <FontIcon icon={icon} className={"reason-icon"}/>
    </Layout>
    <Heading level={6} className={"text-center"}>{reason}</Heading>
    <Paragraph>
      {text}
    </Paragraph>
  </Layout>
);
