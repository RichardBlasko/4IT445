import React from 'react';

import {Layout} from "../atoms/Layout";
import {MainBlock} from "../organisms/MainBlock";
import {AdminInfoBlock} from "../organisms/AdminInfoBlock";
import {StorySlider2} from "../organisms/StorySlider2";
import {EventSlider2} from "../organisms/EventSlider2";
import {SocialNetworkSlider2} from "../organisms/SocialNetworkSlider2";
import {ReasonSlider2} from "../organisms/ReasonSlider2";
import {TopNavBar} from "../molecules/TopNavBar";

export const AdminHomeTemplate = ({ title, paragraph }) => (
  <Layout>
    <TopNavBar/>
    <AdminInfoBlock/>
  </Layout>
);
