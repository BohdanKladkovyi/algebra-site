import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

///COMPONENTS

import Nav_Bar from './Components/NavBar';
import Carousel1 from './Components/Carousel';
import Layout from './Components/Layout';


class Routes extends Component {
    render() {
        return (
            <Layout>
           <Switch>
               <Route path="/" exact component ={Nav_Bar}/>
               <Route path="/" exact component ={Carousel1}/>
           </Switch>
           </Layout>
        );
    }
}

export default Routes;