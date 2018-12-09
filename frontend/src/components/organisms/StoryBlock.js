import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {Paragraph} from "../atoms/Paragraph";

export const StoryBlock = ({ id, person,age, diagnose, story, img}) => (
<Layout>

  <Row>
  <Column className="storyblock" lg={12} md={12} sm={12} xs={12}>
<span className="storyautor text-justify quote">❝</span>

  <Paragraph className="part-sub2355">
    {diagnose}
    </Paragraph>
  <Paragraph className="paragraphtext">
    {story}
    </Paragraph>
    <Paragraph className="storyautor">
    {person}, {age} let
      </Paragraph>
  </Column>
  </Row>


</Layout>
);
