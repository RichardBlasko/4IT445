import React from 'react';
import {connect} from 'react-redux';

import {Layout} from '../atoms/Layout';
import {Nav} from '../atoms/Nav/Nav';
import {NavBar} from '../atoms/Nav/NavBar';
import {NavItem} from '../atoms/Nav/NavItem';
import {NavLink} from '../atoms/Nav/NavLink';
import {getNumberOfItems} from '../../services/StoryList/reducer';
import {FontIcon} from "../atoms/FontIcon";
import {SearchInput} from "../molecules/SearchInput";
import {Link} from "../atoms/Link";
import {Image} from "../atoms/Image";

export const TopNavBarRaw = ({close}) => (
  <NavBar>
    <FontIcon icon="times" className={"mobile-close"}  onClick={close}/>
    <Link className="navbar-brand " to="/">
      <Image src={"/static/img/logo2B.png"} className={"img-fluid"}/>
    </Link>
    <Layout className="navbar-collapse  justify-content-end">
      <Nav className="nav-pills">
        <NavItem>
          <NavLink exact className="nav-link" to="/pribehy">
            Příběhy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/prevence">
            Prevence
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/kalendar">
            Kalendář
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/socialnisite">
            #PrevenceMáSmysl
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/partneri">
            Partneři
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/projekt">
            O projektu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="#">
            <SearchInput/>
          </NavLink>
        </NavItem>
        <NavItem onClick={close} className={"close-menu"}>
          <NavLink className="nav-link" to="#">
            <FontIcon icon="times"/>
          </NavLink>
        </NavItem>
      </Nav>
    </Layout>
  </NavBar>
);

const mapStateToProps = storeState => ({
  numberOfCartItems: getNumberOfItems(storeState.shoppingCart),
});

export const TopNavBar = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }, // See: https://github.com/reduxjs/react-redux/blob/dde1a0a11dbb093f718757409b357cd04c9790e3/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
)(TopNavBarRaw);
