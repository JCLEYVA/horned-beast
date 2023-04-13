import React from 'react';
import HornedBeast from './hornedbeast';
import { Row } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
           <Row sm={1} md={3} lg={5}>
             {this.props.allBeasts.map((beast, i) => (
             <HornedBeast 
             key={i} 
             index ={i}
             imageSrc = {beast.image_url}
             title = {beast.title}
             description = {beast.description}
             display = {this.props.display} 
             />
             ))}
           </Row>
         )
  }
}
export default Main;