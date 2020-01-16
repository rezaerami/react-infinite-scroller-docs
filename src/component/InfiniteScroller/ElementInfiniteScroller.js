import React, {useState, useRef} from "react";
import {useElementScroll} from "../../hooks";
import Article from "./Article";

const ElementInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  const itemsListRef = useRef(null);
  useElementScroll(itemsListRef, () => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return (
    <section className="content" ref={itemsListRef} style={{height: '400px', overflowY: 'auto'}}>
      {[...Array(itemsCount).keys()].map(key => <Article  key={key}/>)}
    </section>
  )
}

export default ElementInfiniteScroller;