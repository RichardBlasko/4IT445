import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {FilterBox} from "../molecules/FilterBox";
import {BurgerMenu} from "../molecules/BurgerMenu";
import {Paragraph} from "../atoms/Paragraph";
import {NavLink} from "../atoms/Nav/NavLink";
import {Link} from "../atoms/Link.js";


export class MainBlock extends React.Component {


  render() {
    let {genders, anamnesis, styles} = this.props;

    return (
      <Layout className="page-background">
        <Layout className="page-background-overlay">
          <Layout className="container100">
            <BurgerMenu/>
            <Layout className="center-wrapper col-sm-12 col-12">
            <Heading level={2} className="headline-slogan mb-3">
        PŘIJĎ NA PROHLÍDKU

        {/*             VÍŠ, ŽE STAČÍ TŘEBA JEN <span className={"orange-text"}>1 PREVENTIVNÍ PROHLÍDKA</span> K TOMU, ABY
                        JSI <span
                        className={"orange-text"}>UŠETŘIL STOVKY ZBYTEČNÝCH </span> HODIN
                        U DOKTORA! <br/>TO UŽ ZA TO STOJÍ, <span className={"orange-text"}>NEMYSLÍŠ</span>? */}

                      </Heading>
                      <Heading level={2} className="headline-slogan orange-text small-headline">
        ZACHRAŇ SI ŽIVOT
                      </Heading>
              <FilterBox
                genders={genders}
                anamnesis={anamnesis}
                styles={styles}
              />
              <Layout className="text-center">
                <NavLink exact to="/prevence" className="linkmain">
                  Zobrazit vše
                </NavLink>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    )
  }

}
