import React, {Component} from 'react';
import {FontIcon} from "../atoms/FontIcon";
import {Layout} from "../atoms/Layout";

import Transition from 'react-transition-group/Transition';
import {InputWithButton} from "./InputWithButton";

export class SearchInput extends Component {

  constructor() {
    super();
    this.state = {
      collapse: true,
    }
  }

  collapseInput = () => {
    let {collapse} = this.state;
    this.setState({
      collapse: !collapse,
    })
  }

  render() {
    const {collapse} = this.state;
    return (
      <Layout className={"float-right"}>
        {collapse && <FontIcon onClick={this.collapseInput} icon={"search"}/>}
        {!collapse &&
        <Transition
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <InputWithButton className={"search-input"} buttonCss={"input-search-button"} buttonText={<FontIcon icon={"search"}/>}/>
        </Transition>
        }
      </Layout>
    );
  }
}
