import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";

import {LoonoPartnerBlock} from "../organisms/LoonoPartnerBlock";
import {AvonPartnerBlock} from "../organisms/AvonPartnerBlock";
import {LprPartnerBlock} from "../organisms/LprPartnerBlock";
import {StkPartnerBlock} from "../organisms/StkPartnerBlock";

export const PartnersTemplate = () => (
  <Layout>
    <HeadBlock
      category={"Partnerské projekty"} descr={"Seznamte se s našimi partnery, se kterými spolupracujeme na dalších projektech."}
    />
    <LoonoPartnerBlock/>
    <AvonPartnerBlock/>
    <LprPartnerBlock/>
    <StkPartnerBlock/>    
  </Layout>
);
