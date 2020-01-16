import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Link} from "react-router-dom";

const Docs = () => (
  <div className="container">
    <nav className="doc-links">
      <a href="#useElementScroller" >useElementScroller</a>
      <a href="#useWindowScroller">useWindowScroller</a>
    </nav>
    <section id="useElementScroller">
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
        {`import {useElementScroll} from 'react-infinite-scroller-snp';`}
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
import {useElementScroll} from 'react-infinite-scroller-snp';

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
    <section>
      <h2>
        <span>Demo: </span>
        <Link to="/examples/element">click here to see the demo</Link>
      </h2>
    </section>
    <div className="separator" />
    <section id="useWindowScroller">
      <h1>useWindowScroller</h1>
      <p>useWindowScroller makes the window call a function each time that it reaches to the end.</p>
    </section><section>
    <h1>API</h1>
    <ul>
      <li>
        <b>fn (function) : </b>
        <small>function to call, when scroll of the window reaches to the bottom</small>
      </li>
      <li>
        <b>threshold [number] : </b>
        <small>threshold to call given function before reaching to the end, default is 100</small>
      </li>
    </ul>
    <SyntaxHighlighter language="javascript" style={dark}>
      {`useWindowScroll(fn, threshold);`}
    </SyntaxHighlighter>
  </section>
    <section>
      <h1>Usage</h1>
      <h2>
        <span>Step 1: </span>
        <b>Component</b>
      </h2>
      <p>Have a component that contains your element</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import React from 'react';
  const foo = () => {
      const handleScroll = () => console.log("load more");
      return (
          <div>
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
        <b>Import useWindowScroll hook</b>
      </h2>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import {useWindowScroll} from 'react-infinite-scroller-snp';`}
      </SyntaxHighlighter>
    </section>
    <section>
      <h2>
        <span>Step 3: </span>
        <b>Call useWindowScroll</b>
      </h2>
      <p>Call useWindowScroll hook</p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`import React from 'react';
import {useWindowScroll} from 'react-infinite-scroller-snp';

const foo = () => {
    useWindowScroll(handleScroll, 100);
    
    const handleScroll = () => console.log("load more");
    return (
        <div>
            // content goes here
        </div>
    )
}
export default Foo`}
      </SyntaxHighlighter>
    </section>
    <section>
      <h2>
        <span>Demo: </span>
        <Link to="/examples/window">click here to see the demo</Link>
      </h2>
    </section>
  </div>
)

export default Docs