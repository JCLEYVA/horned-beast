import Image from 'react-bootstrap/Image';
import { Modal, Button } from 'react-bootstrap';
import { Component } from 'react';

class SelectedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>  
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.src} alt={this.props.description} fluid />
                    <p>{this.props.description}</p>   
                </Modal.Body>
                {this.props.SelectedBeast && 
                    <Modal.Footer>
                        <h2>{this.props.SelectedBeast.title}</h2>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                }
            </Modal> 
        );
    }
}

export default SelectedBeast;

// import Image from 'react-bootstrap/Image';
// import { Modal, Button } from 'react-bootstrap';
// import { Component } from 'react';

// class SelectedBeast extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalOpen: false,
//         };
//     }

//     render() {
//         return (
//             <Modal show={this.props.show} onHide={this.props.onClose}>
//                 <Modal.Header closeButton>  
//                 <Modal.Title>{this.props.title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                 <Image src={this.props.src} alt={this.props.description} fluid />
//                     <p>{this.props.description}</p>   
//                     </Modal.Body>
//                      {this.props.SelectedBeast} && <><h2>{this.props.SelectedBeast.title}</h2>
//                  </> 
//                 <Modal.Footer>
//                     <Button onClick={this.props.onClose}>Close</Button>
//                     </Modal.Footer>
//             </Modal> 
//         );
//         }
//     }

// export default SelectedBeast;

