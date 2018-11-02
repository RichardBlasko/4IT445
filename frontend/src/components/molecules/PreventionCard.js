import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Heading} from "../atoms/Heading";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {Paragraph} from "../atoms/Paragraph";
import {Button} from "../atoms/Button/Button";
import LazyLoad from 'react-lazy-load';
import { CSSTransitionGroup } from 'react-transition-group';

export class PreventionCard extends React.Component {


  render() {
    let {prevention} = this.props;

    return (
      <div className="widget-list">
      <LazyLoad throttle={300} height={225} once>
      <CSSTransitionGroup key = "1"
                   transitionName="fade"
                   transitionAppear
                   transitionAppearTimeout={500}
                   transitionEnter={false}
                   transitionLeave={false}>

        <Row className={"justify-content-center pt-2 mb-3"}>
          <Layout className={"col-md-8 col-xs-11 card-radius grey-light p-4"}>
            <Heading level={5} className={"upper"}>{prevention.name}</Heading>
            <Layout>
              <ListInline>
                <ListInlineItem className={"tag"}>Tag 1</ListInlineItem>
                <ListInlineItem className={"tag"}>Tag 2</ListInlineItem>
              </ListInline>
            </Layout>
            <Paragraph>
              Stručný popis nemoci, který nevyděsí, ale popíše rizika, a ve zkratce popíše jak probíhá vyšetření. Protože to je v mnoha případěch také důležité pro hodně lidí. Takže tu bude prostě nějaký ten středně dlouhý text …
            </Paragraph>
            <Button variant={"read"} title={"Chci se dozvědět více"}/>
          </Layout>
        </Row>


</CSSTransitionGroup>
</LazyLoad>

</div>
    )
  }
}
