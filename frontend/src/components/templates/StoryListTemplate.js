import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";
import {StoryBlock} from "../organisms/StoryBlock";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";


export const StoryListTemplate = () => (
  <Layout>
    <HeadBlock category={"Za 5 minut 12"} descr={"Příběhy těch, kterým prevence zachránila život"}/>
    <Layout>
    <Row className={"justify-content-center"}>
      <Column lg={8} md={8} sm={12} xs={12}>
      <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
        <StoryBlock
          id={1}
          diagnose={"Rakovina tlustého střeva"}
          person={"Ivana"}
          age ={"56"}
          story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
          img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
        />
        </Column>

       <Column lg={12} md={12} sm={12} xs={12} className={"mb-3 storySlider"}>
         <StoryBlock
           id={1}
           diagnose={"Rakovina tlustého střeva"}
           person={"Maria"}
           age ={"56"}
           story={"O rakovině tlustého střeva a konečníku jsem poprvé slyšela až v době, kdy jsem už měla nějaké problémy - hlavně silné střevní křeče, časté zvracení a …"}
           img={"https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?cs=srgb&dl=arm-blood-close-up-1164531.jpg"}
         />
         </Column>
  
      </Column>
    </Row>
    </Layout>
  </Layout>
);
