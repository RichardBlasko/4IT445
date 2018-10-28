import React, {Component} from 'react';
import {FontIcon} from "../atoms/FontIcon";
import {Layout} from "../atoms/Layout";


import {TopNavBar} from "../organisms/TopNavBar";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class BurgerMenu extends Component {

  constructor() {
    super();
    this.state = {
      collapse: true,
    }
  }

  collapseMenu = () => {
    let {collapse} = this.state;
    this.setState({
      collapse: !collapse,
    })
  }

  render() {
    const {collapse} = this.state;
    return (
      <Layout className={"float-right"}>
        {collapse && <Layout className={"menu"} onClick={this.collapseMenu}><FontIcon icon={"bars"}/> MENU</Layout>}
        {!collapse &&
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <TopNavBar close={this.collapseMenu}/>
        </ReactCSSTransitionGroup>
        }
      </Layout>
    );
  }
}
