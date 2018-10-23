import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {SupporterCard} from "../molecules/SupporterCard";
import {Column} from "../atoms/Column";

export const SupporterSlider = ({children}) => (
  <Layout className="wrapper pb-5 grey">
    <Row className={"justify-content-center mt-5"} >
      <Column xs={10}>
        <Row>
          <SupporterCard img={"https://via.placeholder.com/300x200"} alt={"Supporters"} link={""}/>
          <SupporterCard img={"https://via.placeholder.com/300x200"} alt={"Supporters"} link={""}/>
          <SupporterCard img={"https://via.placeholder.com/300x200"} alt={"Supporters"} link={""}/>
          <SupporterCard img={"https://via.placeholder.com/300x200"} alt={"Supporters"} link={""}/>
          <SupporterCard img={"https://via.placeholder.com/300x200"} alt={"Supporters"} link={""}/>
          <SupporterCard img={"https://via.placeholder.com/300x200"} alt={"Supporters"} link={""}/>
        </Row>
      </Column>
    </Row>
  </Layout>
);
