import React from 'react';

import {Layout} from '../atoms/Layout';
import {PageFooter} from './PageFooter';
import {SupporterSlider} from "./SupporterSlider";

export const PageWrapper = ({ children }) => (
  <Layout className="container-fluid">
    {children}
    <SupporterSlider/>
    <PageFooter />
  </Layout>
);
