import { Component } from 'react';
import HornedBeast from './hornedbeast';

class Main extends Component {
  render() {
    console.log (this.props.allBeasts)
    return (
        <div>
            <h2>{this.props.heading}</h2> 
            { 
                this.props.allBeasts.map(singleBeast => (
                    <HornedBeast 
                        key={singleBeast.title} 
                        singleBeast={singleBeast} 
                        getSelectedMethod={this.props.getSelectedMethod} 
                    />
                ))
            }
        </div>
    );
  }
}

export default Main;


// import { Component } from 'react';
// import HornedBeast from './hornedbeast';
// // import Image from 'react-bootstrap/Image'
// // import { Row } from 'react-bootstrap';

// class Main extends Component {
//   render() {
//     console.log (this.props.allBeasts)
//     return (
//         <div>
//             <h2>{this.props.heading}</h2> 
//             { 
//                 this.props.allBeasts.map(singleBeast => <HornedBeast 
//                   singleBeast={singleBeast}
//                   clickState={this.props.handleOpenModal} 
//                 />)
//             }
//         </div>
//     );
//   }
// }

// export default Main;

// import { Component } from 'react';
// import HornedBeast from './hornedbeast';
// // import Image from 'react-bootstrap/Image'
// // import { Row } from 'react-bootstrap';

// class Main extends Component {
//   render() {
//     console.log (this.props.allBeasts)
//     return (
//         <div>
//             <h2>{this.props.heading}</h2> 
//             { 
//                 this.props.allBeasts.map(singleBeast => <HornedBeast singleBeast={singleBeast} />)
//             }
//             </div>
//     );
//         }
// }

  

// export default Main;



