import { Component } from 'react';
import HornedBeast from './hornedbeast';
import Image from 'react-bootstrap/Image'
// import { Row } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
        <div>
            <h2>{this.props.heading}</h2>
            {
                this.props.imageUrls.map(imageInfo => <HornedBeast info={imageInfo} />)
            }
            </div>
    );
        }
    }

    class HornedBeast extends Component {

        constructor(props) {
            super(props);
            this.state ={
                status: "Nay",
            }

        }
handleClick = () => {
    // alert(this.props.info.title);
    // use arrow functions for event listeners for this
    // update state

    const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";

    this.setState({
        status: newStatus

    });
}

        render() {
            return (
                <div onCLick={this.handleClick}>
                    <Image src={this.props.info.image_Url} alt="some Horned Beasts" rounded fluid />
                    <p>{this.props.info.title}</p>
                    <p>{this.state.status}</p>
                </div>
            )
        }
    }
        //    <Row sm={1} md={3} lg={5}>
        //      {this.props.allBeasts.map((beast, i) => (
        //      <HornedBeast 
        //      key={i} 
        //      index ={i}
        //      imageSrc = {beast.image_url}
        //      title = {beast.title}
        //      description = {beast.description}
        //      display = {this.props.display} 
        //      />
        //      ))}
        //    </Row>
         
  

export default Main;