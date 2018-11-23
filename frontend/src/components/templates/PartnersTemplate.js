import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";

import {LoonoPartnerBlock} from "../organisms/LoonoPartnerBlock";
import {AvonPartnerBlock} from "../organisms/AvonPartnerBlock";

export const PartnersTemplate = () => (
  <Layout>
    <HeadBlock
      category={"Partnerské projekty"} descr={"Seznamte se s našimi partnery, se kterými spolupracujeme na dalších projektech."}
    />
    <LoonoPartnerBlock/>
    <AvonPartnerBlock/>
  </Layout>
);
