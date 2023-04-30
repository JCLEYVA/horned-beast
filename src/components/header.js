// import React from 'react';
import { Component } from 'react';

 class Header extends Component{
    render() {
      return (
        <><h1>{this.props.title}</h1><p>Select your favorite Horned Beast!</p></>
      )
    }
}
export default Header;