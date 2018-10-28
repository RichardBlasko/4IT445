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

export const TopNavBarRaw = ({close}) => (
  <NavBar>
    <FontIcon icon="times" className={"mobile-close"}  onClick={close}/>
    <Layout className="navbar-collapse  justify-content-end">
      <Nav className="nav-pills">
        <NavItem>
          <NavLink exact className="nav-link" to="/">
            Příběhy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/">
            Prevence
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/">
            Kalendář
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/">
            #PrevenceMáSmysl
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/">
            O projektu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/">
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
