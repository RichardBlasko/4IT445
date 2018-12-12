import React from 'react';
import {Layout} from "../atoms/Layout";
import {Paragraph} from "../atoms/Paragraph";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";

export const StoryCard  = ({ pribehy }) => {
  console.log(pribehy)
  const { id, autorPribeh, autorVek, textPribeh, idDiagnozy} = pribehy;

  return (
  <Layout className={"card storyCard"}>
    <Layout className="section mt-2 mb-2">
      <Layout className="container">
        <Row>
          <Column lg={12} md={12}  className="mt-1 mt-md-0">
              <Heading level={4} className="card-title white-text">{autorPribeh}, {autorVek} let</Heading>
 <Heading level={7} className="white-text">{getDiagnoseName(pribehy)}</Heading>
              <span className="quotation text-justify white-text">❝</span>
              <Paragraph className="text-justify white-text"
              maxLength="110">
                {lessText(textPribeh)}
              </Paragraph>
            <NavLink className="storieslink white-text" exact to={`/pribehy/${id}`}>
              Celý příběh
            </NavLink>
          </Column>
        </Row>
      </Layout>
    </Layout>
  </Layout>
  );


};

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

function lessText (textPribeh) {

  var s = textPribeh+" ";
  s = s.substring(0, 200)+"...";
  return s;
}
