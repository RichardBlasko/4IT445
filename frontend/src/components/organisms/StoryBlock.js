import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {Paragraph} from "../atoms/Paragraph";

export const StoryBlock = ({ pribehy }) => {

  const {
          autorPribeh,
          autorVek,
          textPribeh,
          idDiagnozy,
        } = pribehy;
  return (
<Layout>

  <Row>
  <Column className="storyblock" lg={12} md={12} sm={12} xs={12}>
<span className="storyautor text-justify quote">❝</span>

  <Paragraph className="part-sub2355">
  {getDiagnoseName(pribehy)}
    </Paragraph>
  <Paragraph className="paragraphtext">
    {textPribeh}
    </Paragraph>
    <Paragraph className="storyautor">
    {autorPribeh}, {autorVek} let
      </Paragraph>
  </Column>
  </Row>


</Layout>
);
}
function getDiagnoseName(pribehy){

  var a = Object.values(pribehy);
  var s = JSON.stringify(a[5])+" ";
  s = s.substring(2);
  var stringArray = s.split(",");
  s = stringArray[1]+" ";
  stringArray = s.split(":");
  s= stringArray[1]+" ";;

  return s.substring(1, s.length-3);
}
