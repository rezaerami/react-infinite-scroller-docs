import React, {useState, useRef} from "react";
import {useElementScroll} from "react-snp-infinite-scroller";
import Article from "./Partials/Article";
import Counter from "./Partials/Counter";

const ElementInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  const itemsListRef = useRef(null);
  useElementScroll(itemsListRef, () => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return (
    <>
      <section className="content"
               ref={itemsListRef}
               style={{height: '400px', overflowY: 'auto'}}
      >
        {[...Array(itemsCount).keys()].map(key => <Article  key={key}/>)}
      </section>
      <Counter count={itemsCount} />
    </>
  )
};

export default ElementInfiniteScroller;