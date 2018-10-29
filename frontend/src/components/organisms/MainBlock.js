import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {FilterBox} from "../molecules/FilterBox";
import {FilterBoxFormik} from "../molecules/FilterBoxFormik";
import {BurgerMenu} from "../molecules/BurgerMenu";


export class MainBlock extends React.Component {


  render() {
    let {genders, anamnesis, styles} = this.props;

    let name = "panel".replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    let final = results === null ? '1' : decodeURIComponent(results[1].replace(/\+/g, ' '));

    return (
      <Layout className="page-background">
        <Layout className="page-background-overlay">
          <Layout className="container100">
            <BurgerMenu/>
            <Layout className="center-wrapper">
              <Heading level={2} className="headline-slogan mb-3">
                VÍŠ, ŽE STAČÍ TŘEBA JEN <span className={"orange-text"}>1 PREVENTIVNÍ PROHLÍDKA</span> K TOMU, ABY
                JSI <span
                className={"orange-text"}>UŠETŘIL STOVKY ZBYTEČNÝCH </span> HODIN
                U DOKTORA! <br/>TO UŽ ZA TO STOJÍ, <span className={"orange-text"}>NEMYSLÍŠ</span>?
              </Heading>
              {final === '2' && (
                <FilterBoxFormik
                  genders={genders}
                  anamnesis={anamnesis}
                  styles={styles}
                />
              )}
              {final === '1' && (
                <FilterBox
                  genders={genders}
                  anamnesis={anamnesis}
                  styles={styles}
                />
              )}
            </Layout>
          </Layout>
        </Layout>
      </Layout>)
  }

}
