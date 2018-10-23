import React from 'react';

import {Layout} from "../atoms/Layout";
import {MainBlock} from "../organisms/MainBlock";
import {StorySlider2} from "../organisms/StorySlider2";
import {EventSlider2} from "../organisms/EventSlider2";
import {SocialNetworkSlider2} from "../organisms/SocialNetworkSlider2";
import {ReasonSlider2} from "../organisms/ReasonSlider2";

export const HomeTemplate = ({ title, paragraph }) => (
  <Layout>
    <MainBlock/>
    <StorySlider2/>
    <ReasonSlider2/>
    <EventSlider2/>
    <SocialNetworkSlider2/>
  </Layout>
);
