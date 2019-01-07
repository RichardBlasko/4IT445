import React, {Component} from 'react';
import {FontIcon} from "../atoms/FontIcon";
import {Layout} from "../atoms/Layout";

import {TopNavBar} from "../organisms/TopNavBar";

import Transition from 'react-transition-group/Transition';
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
        <Transition
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <TopNavBar close={this.collapseMenu}/>
        </Transition>
        }
      </Layout>
    );
  }
}
