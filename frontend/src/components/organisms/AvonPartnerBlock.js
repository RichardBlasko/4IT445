import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Paragraph} from '../atoms/Paragraph';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Image} from "../atoms/Image";

export const AvonPartnerBlock = () => (
  <Layout className="wrapper pb-5 ">
    <Row className={"justify-content-center"}>
      <Column lg={9} md={9} sm={12} xs={12}>
        <Row>
          <Column lg={8} md={8} sm={8} xs={12} className={"mb-3 order-md-2"}>
            <Heading level={3} className="part-sub blue-text">Avon pochod</Heading>
            <Paragraph className={"pb-4 text-justify"}>
              Spolupracujeme se zdravotními nadacemi, neziskovými organizacemi a skvělými lidmi. Je pro nás velikou ctí,
              že jedním z našich partnerů je i nadace Avon, která každoročně pořádá Avon pochod Prahou. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor
              neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in
              pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat
              eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem
              id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ofñcia deserunt
              mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis.
            </Paragraph>
          </Column>
          <Column lg={4} md={4} sm={4} xs={12} className={"mb-3  order-md-1"}>
            <Image src="/static/img/avonpartner.png" className={"img-fluid rounded-circle"}/>
          </Column>
        </Row>
      </Column>
    </Row>
  </Layout>
);
