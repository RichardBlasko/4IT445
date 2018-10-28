import React from 'react';

import {Heading} from "../atoms/Heading";
import {Layout} from "../atoms/Layout";

export const InfoBox = ({what, text}) => (
  <Layout className="part-60 wrapper pb-5 orange ">
    <Layout className="container70">
      <Layout className="center-wrapper">
        <Heading level={1}>{what}</Heading>
        <Heading level={3}>{text}</Heading>
      </Layout>
    </Layout>
  </Layout>
);
