import React, { Component } from 'react';
import Nav_Bar from './NavBar';
import Carousel1 from './Carousel';
import Footer from './Footer';
import Employees from '../Employees';

class Layout extends Component {
    render() {
        return (
            <div>
                <Nav_Bar/>
                <Carousel1/>
                <Employees/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;