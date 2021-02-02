import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
  };

  onMouseEnter = () => {
    const { label, onMouseEnter } = this.props;
    onMouseEnter(label);
  }

  render() {
    const {
      onMouseEnter,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active ';
    }

    return (

      

        <li className={className}
        onMouseEnter={onMouseEnter}
        >
         <label>{label}</label> 
        </li>
        
   
    );
  }
}

export default Tab;