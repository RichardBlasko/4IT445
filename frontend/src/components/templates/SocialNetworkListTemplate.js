import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";
import {TwitterBlock} from "../organisms/TwitterBlock";

export const SocialNetworkListTemplate = () => (
  <Layout>
    <HeadBlock category={"#PREVENCEMASMYSL"} descr={"Sdílejte svoje příběhy s #prevencemasmysl !"}/>
    <TwitterBlock/>
  </Layout>
);
