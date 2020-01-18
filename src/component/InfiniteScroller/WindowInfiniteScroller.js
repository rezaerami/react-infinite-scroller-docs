import React, { useState } from "react";
import {useWindowScroll} from "react-snp-infinite-scroller";
import Article from "./Partials/Article";
import Counter from "./Partials/Counter";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/esm/styles/prism";

const WindowInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const handlePaginate = () => {
    setHasMore(false);
    setTimeout(() => {
      setItemsCount(itemsCount + 1);
      setHasMore(true);
    }, 500);
  };
  useWindowScroll({
    callback: handlePaginate,
    hasMore,
  });
  return (
    <section className="container">
      <section>
        <h2>Example: </h2>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`import React, {useState, useRef} from "react";
import {useWindowScroll} from "react-snp-infinite-scroller";
const WindowInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const handlePaginate = () => {
    setHasMore(false);
    setTimeout(() => {
      setItemsCount(itemsCount + 1);
      setHasMore(true);
    }, 500);
  };
  useWindowScroll({
    callback: handlePaginate,
    hasMore,
  });
  return (
    <section>
      {[...Array(itemsCount).keys()].map(key => (
          <article  key={key}>
            <h3>Lorem Ipsum is simply dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </article>
      ))}
    </section>
  );
};
export default WindowInfiniteScroller;`}
        </SyntaxHighlighter>
      </section>
      <section>
        <h2>Demo: </h2>
        {[...Array(itemsCount).keys()].map(key => <Article  key={key}/>)}
      </section>
      <section>
        <Counter count={itemsCount} />
      </section>
    </section>
  )
};

export default WindowInfiniteScroller;