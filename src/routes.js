import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './Components/Home/home';
import Layout from './hoc/Layouts/layout';
import NewsArticle from './Components/Articles/News/Post/index';
import VideoArticles from './Components/Articles/Videos/Video/index';

class routes extends Component {
        
  render() {
    return (
        <Layout>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/articles/:id' exact component={NewsArticle} />
              <Route path='/videos/:id' exact component={VideoArticles}/>
            </Switch>  
        </Layout>      
    )
  }
}
export default routes ;