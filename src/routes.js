import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './Components/Home/home';
import Layout from './hoc/Layouts/layout';

class routes extends Component {
  render() {
    return (
        <Layout>
            <Switch>
              <Route path='/' component={Home}></Route>
            </Switch>  
        </Layout>
         
    )
  }
}
export default routes ;