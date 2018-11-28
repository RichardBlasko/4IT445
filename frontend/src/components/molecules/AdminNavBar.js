import React from 'react';
import {connect} from 'react-redux';

import {Layout} from '../atoms/Layout';
import {Link} from '../atoms/Link';
import {Nav} from '../atoms/Nav/Nav';
import {NavBar} from '../atoms/Nav/NavBar';
import {NavItem} from '../atoms/Nav/NavItem';
import {NavLink} from '../atoms/Nav/NavLink';
import {getNumberOfItems} from '../../services/StoryList/reducer';
import {FontIcon} from "../atoms/FontIcon";
import {Image} from "../atoms/Image";

export const AdminNavBarRaw = ({close}) => (
  <Layout className={"admin"}>
    <NavBar>
    <FontIcon icon="times" className={"mobile-close"}  onClick={close}/>
    <Link className="navbar-brand " to="/admin">
      <Image src={"/static/img/logo09.png"} className={"img-fluid"}/>
    </Link>
      <Layout className="navbar-collapse  justify-content-end">
        <Nav className="nav-pills">
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/admin/Prevence">
            Prevence
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/admin/Diagnózy">
            Diagnózy
          </NavLink>
        </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/admin/Příběhy">
              Příběhy
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/admin/Príspevky">
              Příspěvky
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/admin/Partneři">
              Partneři
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/login">
              <FontIcon icon={"sign-out-alt"}/>
              Odhlásit se
            </NavLink>
          </NavItem>
        </Nav>
      </Layout>
    </NavBar>
  </Layout>
);

const mapStateToProps = storeState => ({
  numberOfCartItems: getNumberOfItems(storeState.shoppingCart),
});

export const AdminNavBar = connect(
  mapStateToProps,
  null,
  null,
  {pure: false}, // See: https://github.com/reduxjs/react-redux/blob/dde1a0a11dbb093f718757409b357cd04c9790e3/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
)(AdminNavBarRaw);
