import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";
import {TwitterBlock} from "../organisms/TwitterBlock";

export const SocialNetworkListTemplate = () => (
  <Layout>
    <HeadBlock category={"#PREVENCEMASMYSL"} descr={"Zjistěte, jaké všechny prevence jsou v dnešení době podporovány a na které máte nárok. Vyhledejte si přímo ty, které se vás momentálně týkají!"}/>
    <TwitterBlock/>
  </Layout>
);
