import { Component } from 'react';
import HornedBeast from './hornedbeast';
// import Image from 'react-bootstrap/Image'
// import { Row } from 'react-bootstrap';

class Main extends Component {
  render() {
    console.log (this.props.allBeasts)
    return (
        <div>
            <h2>{this.props.heading}</h2> 
            { 
                this.props.allBeasts.map(singleBeast => <HornedBeast singleBeast={singleBeast} />)
            }
            </div>
    );
        }
}

  

export default Main;
