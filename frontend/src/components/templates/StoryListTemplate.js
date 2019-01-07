import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";
import {StoryBlock} from "../organisms/StoryBlock";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import { startFetchPribehy } from '../../services/PribehyList/actions';

import {
  getIsLoading,
  getPribehy,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/PribehyList/reducer';

class StoryListTemplateRaw extends Component {
  componentDidMount() {
    const { startFetchPribehy } = this.props;
    startFetchPribehy();
  }

render() {
    const { pribehy } = this.props;
    return(
      <Layout>
        <HeadBlock category={"Za 5 minut 12"} descr={"Příběhy těch, kterým prevence zachránila život"}/>
        <Layout>
        <Row className={"justify-content-center"}>
          <Column lg={8} md={8} sm={12} xs={12}>



             {pribehy.map(pribehy => (
             <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
               <StoryBlock pribehy={pribehy} key={pribehy.id}/>
               </Column>
               ))}

          </Column>
        </Row>
        </Layout>
      </Layout>
    );
  }
  }

  const mapStateToProps = storeState => {
    const { pribehyList } = storeState;
    return {
      isLoading: getIsLoading(pribehyList),
      pribehy: getPribehy(pribehyList),
      isLoaded: getIsLoaded(pribehyList),
      error: getError(pribehyList),
      isError: getIsError(pribehyList),
    };
  };

  const mapDispatchToProps = {
    startFetchPribehy
  };

  export const StoryListTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StoryListTemplateRaw);
