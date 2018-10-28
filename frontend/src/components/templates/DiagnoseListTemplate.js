import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";

export const DiagnoseListTemplate = () => (
  <Layout>
    <HeadBlock category={"Seznam diagnóz"} descr={"Všechny tyto diagnózy jste schopni odhalit pomocí preventivních vyšetření, které jsou na této stránce uvedené"}/>
  </Layout>
);
