import React from 'react';

import {Layout} from '../atoms/Layout';
import {PageFooter} from './PageFooter';
import {SupporterSlider} from "./SupporterSlider";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

export const PageWrapper = ({ children }) => (
  <Layout className="container-fluid">
    {children}
    <ScrollUpButton ContainerClassName="scroll-up-button"/>
    <SupporterSlider/>
    <PageFooter />
  </Layout>
);
