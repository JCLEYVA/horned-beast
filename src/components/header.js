import React from 'react';

 class Header extends React.Component{
    render() {
      return (
        <><h1>{this.props.title}</h1><p>Below is images of Horned Beast. Select your favorites to learn a little more about them. Images with the most hearts have won the most hearts and will go down in Horned Beast history! </p></>
      )
    }
}
export default Header;