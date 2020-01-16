import React, {useState} from 'react';

import {TabSwitchProvider} from "./component/TabSwitch/context";

import Layout from "./component/Layout";
import Home from "./component/Home";
import Docs from "./component/Docs";
import {WindowInfiniteScroller, ElementInfiniteScroller} from "./component/InfiniteScroller";

import './resources/styles/styles.css'

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const content = {
    home: <Home />,
    docs: <Docs />,
    useElementInfiniteScroller: <ElementInfiniteScroller />,
    useWindowInfiniteScroller: <WindowInfiniteScroller />,
  }
  return (
    <TabSwitchProvider value={{activeTab, setActiveTab}}>
      <Layout>
        {content[activeTab]}
      </Layout>
    </TabSwitchProvider>
  )
};

export default App;
