import React, { useState } from "react";
import {useWindowScroll} from "react-infinite-scroller-snp";
import Article from "./Partials/Article";
import Counter from "./Partials/Counter";

const WindowInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  useWindowScroll(() => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return (
    <section className="content">
      {[...Array(itemsCount).keys()].map(key => <Article  key={key}/>)}
      <Counter count={itemsCount} />
    </section>
  )
};

export default WindowInfiniteScroller;