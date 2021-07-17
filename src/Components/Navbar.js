import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title:'GitHub Tracker',
     icon:'fab fa-github'
  };
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-main">
         <h1>
           <i className={this.props.icon}></i>
           {this.props.title}</h1>
      </nav>
    )
  }
}

export default Navbar
