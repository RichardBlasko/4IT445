import React from 'react';

import {Layout} from '../atoms/Layout';
import {AdminPageFooter} from './AdminPageFooter';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

export const AdminPageWrapper = ({ children }) => (
  <Layout className="container-fluid">
    {children}
    <ScrollUpButton ContainerClassName="scroll-up-button"/>
    <AdminPageFooter />
  </Layout>
);
