import React from 'react';

import {Layout} from "../atoms/Layout";
import {InfoBlock} from "../organisms/InfoBlock";
import {TextBlock} from "../organisms/TextBlock";
import {GoalsBlock} from "../organisms/GoalsBlock";
import {WhyBlock} from "../organisms/WhyBlock";
import {WhoBlock} from "../organisms/WhoBlock";
import {TopNavBar} from "../molecules/TopNavBar";

export const AboutTemplate = ({ title, paragraph }) => (
  <Layout>
    <TopNavBar/>
    <InfoBlock/>
    <TextBlock/>
    <GoalsBlock/>
    <WhyBlock/>
    <WhoBlock/>
  </Layout>
);
