import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './Components/Home/home';
import Layout from './hoc/Layouts/layout';
import NewsArticle from './Components/Articles/News/Post/index';
import VideoArticles from './Components/Articles/Videos/Video/index';
import NewsMain from './Components/Articles/News/Main/index';
import VideosMain from './Components/Articles/Videos/Main/index';
class routes extends Component {
        
  render() {
    return (
        <Layout>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/news' exact component={NewsMain}/>
              <Route path='/articles/:id' exact component={NewsArticle} />
              <Route path='/videos/:id' exact component={VideoArticles}/>
              <Route path='/videos' exact component={ VideosMain } />
            </Switch>  
        </Layout>      
    )
  }
}
export default routes ;