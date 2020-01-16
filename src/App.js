import React, {useRef, useState} from 'react';
import {useWindowScroll, useElementScroll} from './hooks'
import Layout from "./component/Layout";
import './resources/styles/styles.css'

const App = () => {
  const [itemsCount, setItemsCount] = useState(20);
  const itemListRef = useRef(null)
  useElementScroll(itemListRef, () => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  useWindowScroll(() => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return (
    <Layout>
      <div className="App" ref={itemListRef} style={{overflowY: 'auto', height: '200px'}}>
        {[...Array(itemsCount).keys()].map(key => (
          <h1 key={key}>i'm item {key + 1}</h1>
        ))}
      </div>
    </Layout>
  );
}

export default App;
