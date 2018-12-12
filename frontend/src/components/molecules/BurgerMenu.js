import React, {Component} from 'react';
import {FontIcon} from "../atoms/FontIcon";
import {Layout} from "../atoms/Layout";


import {TopNavBar} from "../organisms/TopNavBar";

<<<<<<< HEAD
import { CSSTransitionGroup } from 'react-transition-group'

=======

import Transition from 'react-transition-group/Transition';
>>>>>>> 2b7fda5d853ee3317c8e2ecd297e9fc1e1a6b81c
import {Link} from "../atoms/Link";
import {Image} from "../atoms/Image";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";

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
      <Layout>
        {collapse &&
        <Row>
          <Column xs={"undefined"}>
            <Link className="navbar-brand " to="/">
              <Image src={"/static/img/logo2B.png"} className={"img-fluid"}/>
            </Link>
          </Column>
          <Layout className="col-md-auto"/>
          <Column xs={"undefined"}>
            <Layout className={"menu"} onClick={this.collapseMenu}>
              <FontIcon icon={"bars"}/> MENU
            </Layout>
          </Column>
        </Row>
        }
        {!collapse &&
<<<<<<< HEAD
        <CSSTransitionGroup
=======
        <Transition
>>>>>>> 2b7fda5d853ee3317c8e2ecd297e9fc1e1a6b81c
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <TopNavBar close={this.collapseMenu}/>
<<<<<<< HEAD
        </CSSTransitionGroup >
=======
        </Transition>
>>>>>>> 2b7fda5d853ee3317c8e2ecd297e9fc1e1a6b81c
        }
      </Layout>
    );
  }
}
