import React, {useContext} from 'react'
import PropTypes from 'prop-types';

import {context as TabSwitchContext} from './context';

const TabSwitch = ({tab, title}) => {
  const {activeTab, setActiveTab} = useContext(TabSwitchContext);
  return (
    <button
      className={`tab-switch ${tab === activeTab ? 'active' : ''}`}
      onClick={() => {
        window.scrollTo(0, 0);
        setActiveTab(tab)
      }}
    >
      {title}
    </button>
  )
};

TabSwitch.propTypes = {
  tab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default TabSwitch