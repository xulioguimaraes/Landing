import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

// Import Logo
import xgboardLogo from "../../assets/images/iconxg.png";

//import icon
import FeatherIcon from "feather-icons-react";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  // render() {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    var targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        {/* Navbar Start */}
        <nav
          expand="lg"
          fixed="top"
          className={"navbar navbar-expand-lg fixed-top navbar-custom " + this.props.navClass}
          id="navbar"
        >
          <Container>
            {/* LOGO */}
            <NavbarBrand className="logo" href="/">
              <img src={xgboardLogo} alt="XGBoard" height="28" />
              <span className="ms-2 fw-bold text-white">XGBoard</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i>
                <FeatherIcon icon="menu" />
              </i>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="ms-auto navbar-center" id="mySidenav">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <a href="https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1" target="_blank" rel="noopener noreferrer" className="btn btn-sm rounded-pill nav-btn ms-lg-3">
                  Download Gratuito
                </a>
              </ScrollspyNav>
            </Collapse>
          </Container>
        </nav>

        {/* </div>
      </nav> */}
        {/* Navbar End */}
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;
