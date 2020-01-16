import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from "./component/Layout";
import Home from "./component/Home";
import {WindowInfiniteScroller, ElementInfiniteScroller} from "./component/InfiniteScroller";
import './resources/styles/styles.css'

const App = () => (
    <Router>
      <Layout>
        <Switch>
          <Route path="/examples/element" exact component={ElementInfiniteScroller} />
          <Route path="/examples/window" exact component={WindowInfiniteScroller} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
)

export default App;
