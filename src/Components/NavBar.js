import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
/*import { Navbar, NavbarBrand, NavbarHeader, NavItem, Nav, MenuItem, NavDropdown, NavbarCollapse, NavbarToggle, Button, bsClass  } from 'react-bootstrap';*/
/*import 'bootstrap/dist/css/bootstrap.css'; */

///COMPONENTS
import logo from './images/x.png';
import Carousel1 from './Carousel';
import './navBar.css';

class Nav_Bar extends Component {
  
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    return (
      <div className="" style={{width:'100%'}}>
        <div>
        <Navbar className="navBar" light expand="md">
          <NavbarBrand href="/"><img src={logo} width="40" height="40"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle}  />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto"  navbar>
            <NavItem className="col-sm-auto" >
                <NavLink className="text-white" href="/components/"><em>Співробітники</em></NavLink>
              </NavItem>
              <NavItem className="col-sm-auto">
                <NavLink className="text-white" href="/"><em>Навчання</em></NavLink>
              </NavItem>
              <NavItem className="col-sm-auto">
                <NavLink className="text-white" href="/"><em>Наукова робота</em></NavLink>
              </NavItem>
              <NavItem className="col-sm-auto" >
                <NavLink className="text-white" href="/"><em>Публікації</em></NavLink>
              </NavItem>
              <NavItem className="col-sm-auto">
                <NavLink className="text-white" href="/"><em>Історія</em></NavLink>
              </NavItem>
              <NavItem className="col-sm-auto">
                <NavLink className="text-white" href="/"><em>Контакти</em></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div className=''>
           
        </div>

      </div>
    );
  }
}

export default Nav_Bar;







/* textColor=(
      <div>
        <style type="text/css">{`
         nav-Text-color{
           color:white;
         }
        `}

        </style>
      </div>
)*/


/* <Navbar customClass="textcolor" style = {{background:'#2cc018'}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="./">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav  >
      <NavItem  eventKey={1} href="#">
        Співробітники
      </NavItem>
      <NavItem eventKey={2} href="#">
        Навчання
      </NavItem>
      <NavItem eventKey={3} href="#">
        Наукова Робота 
      </NavItem>
      <NavItem eventKey={4} href="#">
        Публікації
      </NavItem>
      <NavItem eventKey={5} href="#">
        Історія
      </NavItem>
      <NavItem eventKey={6} href="#">
        Контакти
      </NavItem>
    </Nav>
  </Navbar.Collapse>
    </Navbar>*/