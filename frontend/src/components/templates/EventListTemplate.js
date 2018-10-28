import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";

export const EventListTemplate = () => (
  <Layout>
    <HeadBlock category={"Akce"} descr={"Najdi termín akce, a staň se jedním ze zúčastněných. Dozvíš se spousty důležitých informací ale zároveň můžeš i někomu pomoct!"}/>
  </Layout>
);
