import React from 'react';
import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './HeaderComp.scss';
import {headerMenuData} from "../../configs/headerMenuData";
import {VscSearch} from "react-icons/all";

const HeaderComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-comp">
      <Container>
        <div className="header-comp-search">
          <input type="text" className="search-box" placeholder="Search"/>
          <VscSearch className="search-icon"/>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header-comp-items me-auto d-flex justify-content-around align-items-center">
            {
              headerMenuData.map((val, index) => (
                <Nav.Link className="header-item" key={index} href={val.path}>
                  <p className="label">{val.label}</p>
                </Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;