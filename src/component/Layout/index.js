import React from 'react';
import PropTypes from 'prop-types'

import logo from '../../resources/images/logo.png'
import './styles.css'

const Layout = ({children}) => (
  <>
    <header className="header">
      <a href="https://github.com/rezaerami/react-infinite-scroller/" title="react-infinite-scroll">
        <img src={logo} alt='react-infinite-scroll' />
      </a>
    </header>
    <main>
      {children}
    </main>
  </>
)

Layout.propTypes ={
  children: PropTypes.node.isRequired,
}

export default  Layout