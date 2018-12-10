import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets'

export const TwitterBlock = () => (
  <Layout className="wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={9} md={9} sm={12} xs={12}>
        <Row>
          <Column lg={12} md={12} sm={12} xs={12} className={"mb-3"}>
            <Heading level={3} className="part-sub blue-text">Twitter</Heading>
            <Paragraph>
            <Timeline
              dataSource={{
                sourceType: 'timeline',
                id: '1071793643252531201'
              }}
              options={{
                widht: 'auto',
                height: '800'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
            </Paragraph>
          </Column>
        </Row>
      </Column>
    </Row>
  </Layout>
);
