import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from "./component/Layout";
import {WindowInfiniteScroller, ElementInfiniteScroller} from "./component/InfiniteScroller";
import './resources/styles/styles.css'

const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/element" exact>
          <ElementInfiniteScroller />
        </Route>
        <Route path="/window" exact>
          <WindowInfiniteScroller />
        </Route>
      </Switch>
    </Router>
  </Layout>
)

export default App;
