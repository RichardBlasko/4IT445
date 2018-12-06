import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";
import {StoryCard} from "../molecules/StoryCard";
import {FontIcon} from "../atoms/FontIcon";
import { startFetchPribehy } from '../../services/PribehyList/actions';

import {
  getIsLoading,
  getPribehy,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/PribehyList/reducer';

class StorySliderRaw extends Component {
  componentDidMount() {

    const { startFetchPribehy } = this.props;
    startFetchPribehy();
    console.log(this.props);

  }


render() {
  const { isLoading, pribehy, isLoaded, isError, error } = this.props;
  return(

    <Layout className="part-55 wrapper pb-5 container-fluid fixslider"
    isLoading={isLoading}
          isLoaded={isLoaded}
          isError={isError}
          diagnozy={pribehy}
          error={error}>
      <Row className={"justify-content-center"}>
        <Column lg={10} md={10} sm={12} xs={12}>
          <Layout className="container70">
            <Layout className={"slider-wrapper"}>
              <Row>
                <Column lg={4} md={4} sm={12} xs={12}>
                  <Heading level={3} className="part-head2355">Za 5 minut 12</Heading>
                  <Heading level={4} className="part-sub2355">Příběhy těch, kterým prevence zachránila život</Heading>
                  <NavLink className="storieslink" exact to="/pribehy">
                    Zobrazit všechny příběhy
                  </NavLink>
                </Column>
                <Column lg={8} md={8} sm={12} xs={12}>
                  <Row>
                  {/*
                  <Column lg={1} md={1} sm={1} xs={1} className={"text-center"}>
                    <Layout className={"mt-3"}>
                      <button onClick={previousSlide}><FontIcon icon={"chevron-left"} className={"slider-navigator mr-5 mt-2"}/></button>
                    </Layout>
                  </Column>
  */}

                  <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
                  <Row>
                  <Carousel
                      autoplay={false}
                      autoplayInterval={7000}
                      cellSpacing = {10}
                      width={"100%"}
                      wrapAround = {true}
                      withoutControls = {false}
                      slideWidth = {0.5}
                      renderCenterLeftControls={({ previousSlide }) => (
                        <FontIcon icon={"chevron-left"} onClick={previousSlide} className={"slider-navigator mr-5 mt-2"}/>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                       <FontIcon icon={"chevron-right"} onClick={nextSlide} className={"slider-navigator ml-5 mt-2"}/>
                      )}
                      >

                      <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
                        <StoryCard
                          id={1}
                          diagnose={"Rakovina tlustého střeva"}
                          person={"Ivana"}
                          age ={"56"}
                          story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
                          img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
                        />
                        </Column>

                       <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
                         <StoryCard
                           id={1}
                           diagnose={"Rakovina tlustého střeva"}
                           person={"Maria"}
                           age ={"56"}
                           story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
                           img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
                         />
                         </Column>

                         <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
                           <StoryCard
                             id={1}
                             diagnose={"Rakovina tlustého střeva"}
                             person={"Tereza"}
                             age ={"56"}
                             story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
                             img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
                           />
                           </Column>
                           <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
                             <StoryCard
                               id={1}
                               diagnose={"Rakovina tlustého střeva"}
                               person={"Anna"}
                               age ={"56"}
                               story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
                               img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
                             />
                             </Column>


                  </Carousel>
                  </Row>
                  </Column>


                  </Row>

                </Column>
              </Row>
            </Layout>
          </Layout>
        </Column>
      </Row>
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
  startFetchPribehy,
};

export const StorySlider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StorySliderRaw);
