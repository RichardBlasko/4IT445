import React from 'react';

import {Layout} from "../atoms/Layout";
import {MainBlock} from "../organisms/MainBlock";
import {StorySlider2} from "../organisms/StorySlider2";
import {EventSlider2} from "../organisms/EventSlider2";
import {SocialNetworkSlider2} from "../organisms/SocialNetworkSlider2";
import {ReasonSlider2} from "../organisms/ReasonSlider2";

import {GENDERS} from "../../mocks/Genders";
import {ANAMNESIS} from "../../mocks/Anamnes";
import {STYLES} from "../../mocks/LifeStyle";

export const HomeTemplate = () => (
  <Layout>
    <MainBlock  genders={GENDERS} anamnesis={ANAMNESIS} styles={STYLES}/>
    <StorySlider2/>
    <ReasonSlider2/>
    <EventSlider2/>
    <SocialNetworkSlider2/>
  </Layout>
);
