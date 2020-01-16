import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Docs = () => (
  <div className="container">
    <section>
      <h1>useElementScroller</h1>
      <p>useElementScroller makes a component call a function each time that it reaches to the end.</p>
    </section>
    <section>
      <h1>API</h1>
      <ul>
        <li>
          <b>ref (reference) : </b>
          <small>reference to the element</small>
        </li>
        <li>
          <b>fn (function) : </b>
          <small>function to call, when scroll of the element reaches to the bottom</small>
        </li>
        <li>
          <b>threshold [number] : </b>
          <small>threshold to call given function before reaching to the end, default is 100</small>
        </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`useElementScroll(ref, fn, threshold);`}
      </SyntaxHighlighter>
    </section>
    <section>
      <h1>Usage</h1>
      <h2>
        <span>Step 1: </span>
        <b>Component</b>
      </h2>
      <p>Have a component that contains your scrollable element, element should has a ref</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import React, {useRef} from 'react';
const foo = () => {
    const elementRef = useRef;
    const handleScroll = () => console.log("load more");
    return (
        <div ref={elementRef}>
            // content goes here
        </div>
    )
}
export default Foo`}
      </SyntaxHighlighter>
    </section>
    <section>
      <h2>
        <span>Step 2: </span>
        <b>Import useElementScroll hook</b>
      </h2>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import {useElementScroll} from 'react-infinite-scroller';`}
      </SyntaxHighlighter>
    </section>
    <section>
      <h2>
        <span>Step 3: </span>
        <b>Call useElementScroll</b>
      </h2>
      <p>Call useElementScroll hook with element ref</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import React, {useRef} from 'react';
import {useElementScroll} from 'react-infinite-scroller';

const foo = () => {
    const elementRef = useRef;
    useElementScroll(elementRef, handleScroll, 100);
    
    const handleScroll = () => console.log("load more");
    return (
        <div ref={elementRef}>
            // content goes here
        </div>
    )
}
export default Foo`}
      </SyntaxHighlighter>
    </section>
  </div>
)

export default Docs