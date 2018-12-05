import React from 'react';

import {Layout} from "../atoms/Layout";
import {MainBlock} from "../organisms/MainBlock";
import {StorySlider} from "../organisms/StorySlider";
import {EventSlider} from "../organisms/EventSlider";
import {SocialNetworkSlider} from "../organisms/SocialNetworkSlider";
import {ReasonSlider} from "../organisms/ReasonSlider";
import {PartnerProjectSlider} from "../organisms/PartnerProjectSlider";

import {GENDERS} from "../../mocks/Genders";
import {ANAMNESIS} from "../../mocks/Anamnes";
import {STYLES} from "../../mocks/LifeStyle";

export const HomeTemplate = () => (
  <Layout>
    <MainBlock  genders={GENDERS} anamnesis={ANAMNESIS} styles={STYLES}/>
    <StorySlider/>
    <ReasonSlider/>
    <EventSlider/>
    <SocialNetworkSlider/>
//    <PartnerProjectSlider/>
  </Layout>
);
