import React from 'react';

import {Layout} from "../atoms/Layout";
import {TextBlock} from "../organisms/TextBlock";
import {GoalsBlock} from "../organisms/GoalsBlock";
import {WhyBlock} from "../organisms/WhyBlock";
import {WhoBlock} from "../organisms/WhoBlock";
import {HeadBlock} from "../organisms/HeadBlock";

export const AboutTemplate = () => (
  <Layout>
    <HeadBlock
      category={"O projektu"} descr={"Seznamte se s týmem, jejich důvodem a celkovou vizí."}
    />
    <TextBlock/>
    <GoalsBlock/>
    <WhyBlock/>
    <WhoBlock/>
  </Layout>
);
