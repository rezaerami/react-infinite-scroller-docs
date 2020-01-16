import React, {useState, useRef} from "react";
import {useElementScroll} from "react-snp-infinite-scroller";
import Article from "./Partials/Article";
import Counter from "./Partials/Counter";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/esm/styles/prism";

const ElementInfiniteScroller = () => {
  const [itemsCount, setItemsCount] = useState(10);
  const itemsListRef = useRef(null);
  useElementScroll(itemsListRef, () => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return (
    <section className="container">
      <section>
        <h2>Example: </h2>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`import React, {useState, useRef} from "react";
  import {useElementScroll} from "react-snp-infinite-scroller";
  const ElementInfiniteScroller = () => {
    const [itemsCount, setItemsCount] = useState(10);
    const itemsListRef = useRef(null);
    useElementScroll(itemsListRef, () => {
      setTimeout(() => setItemsCount(itemsCount + 1), 500);
    });
    return (
      <section
        ref={itemsListRef}
        style={{height: '400px', overflowY: 'auto'}}
      >
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
    )
  }
  export default ElementInfiniteScroller;`}
        </SyntaxHighlighter>
      </section>
      <section>
        <div
          className="container"
          ref={itemsListRef}
          style={{height: '400px', overflowY: 'auto'}}
        >
          {[...Array(itemsCount).keys()].map(key => <Article key={key}/>)}
        </div>
      </section>
      <section>
        <Counter count={itemsCount}/>
      </section>
    </section>
  )
};

export default ElementInfiniteScroller;