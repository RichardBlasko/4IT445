import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";

import {PartnersFilterBox} from "../molecules/PartnersFilterBox";

import {LoonoPartnerBlock} from "../organisms/LoonoPartnerBlock";
import {AvonPartnerBlock} from "../organisms/AvonPartnerBlock";
import {LprPartnerBlock} from "../organisms/LprPartnerBlock";
import {StkPartnerBlock} from "../organisms/StkPartnerBlock";

import {DIAGNOSIS} from "../../mocks/Diagnosis";

export const PartnersTemplate = () => (
  <Layout>
    <HeadBlock
      category={"Partnerské projekty"} descr={"Seznamte se s našimi partnery, se kterými spolupracujeme na dalších projektech."}
    />
    <PartnersFilterBox diagnosis={DIAGNOSIS}/>
    <LoonoPartnerBlock/>
    <AvonPartnerBlock/>
    <LprPartnerBlock/>
    <StkPartnerBlock/>
  </Layout>
);
