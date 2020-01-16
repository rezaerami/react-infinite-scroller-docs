import React from 'react';
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom";

import logo from '../../resources/images/logo.png'

const Layout = ({children}) => (
  <>
    <header className="header">
      <a href="https://github.com/rezaerami/react-snp-infinite-scroller/" title="react-infinite-scroll">
        <img src={logo} alt='react-infinite-scroll' />
      </a>
    </header>
    <nav className="navigation">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/docs">Docs</NavLink>
      <a target="_blank" href="https://github.com/rezaerami/react-snp-infinite-scroller/" >Github</a>
    </nav>
    <main>
      {children}
    </main>
  </>
)

Layout.propTypes ={
  children: PropTypes.node.isRequired,
}

export default  Layout