import React, { useState } from "react";
import useWindowScroll from "../../hooks/useWindowScroll";
import Article from "./Article";

const WindowInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  useWindowScroll(() => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return (
    <section className="content">
      {[...Array(itemsCount).keys()].map(key => <Article  key={key}/>)}
    </section>
  )
}

export default WindowInfiniteScroller;