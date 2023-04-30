import  Card  from 'react-bootstrap/Card';
import { Component } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
// import Image from 'react-bootstrap/Image';

class HornedBeastCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    handleClick = () => {
        this.setState({ likes: this.state.likes + 1 });
        // this.props.clickState(
        //     this.props.singleBeast.title,
        //     this.props.singleBeast.image_url, 
        //     this.props.singleBeast.description
        //     );
    }

    render() {
        return (
            <Card className='mx-2 my-2' style={{width:'20rem' }} bg='dark' text='light' onClick={this.handleClick}>
                <Card.Img variant='top' src={this.props.singleBeast.image_url} />
                <Card.Body>
                    <Card.Title>
                        {this.props.singleBeast.title}
                    </Card.Title>
                </Card.Body>
                <Card.Text>
                    {this.props.singleBeast.description}
                </Card.Text>
                <Card.Text>
                    <HeartFill /> {this.state.likes}
                </Card.Text>
            </Card>
        );
    }
}

export default HornedBeastCard;