import { Component } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        this.props.getSelectedMethod(
             this.props.singleBeast.title,
             this.props.singleBeast.image_url, 
             this.props.singleBeast.description
        );
    }
   

    render() {
        console.log (this.props.singleBeast.title)
        return (
            <div onClick={this.handleClick}>
                <h2>{this.props.singleBeast.title}</h2>
                <Image 
                    title={this.props.singleBeast.title} 
                    src={this.props.singleBeast.image_url} 
                    alt={this.props.singleBeast.description} 
                    fluid 
                    thumbnail
                 />
                <p>{this.props.singleBeast.description}</p>
                <p>Favorites: {this.state.count} <HeartFill /></p>
            </div>
        );
    }
}

export default HornedBeast;



// import { Component } from 'react';
// import { HeartFill } from 'react-bootstrap-icons';
// import Image from 'react-bootstrap/Image';

// class HornedBeast extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 });
//         this.props.clickState(
//              this.props.singleBeast.title,
//              this.props.singleBeast.image_url, 
//              this.props.singleBeast.description
//              );
//     }
   

//     render() {
//         console.log (this.props.singleBeast.title)
//         return (
//             <div onClick={this.handleClick}>
//                 <h2>{this.props.singleBeast.title}</h2>
//                 <Image 
//                 title={this.props.singleBeast.title} 
//                 src={this.props.singleBeast.image_url} 
//                 alt={this.props.singleBeast.description} 
//                 fluid 
//                 thumbnail
//                  />
//                 <p>{this.props.singleBeast.description}</p>
//                 <p>Favorites: {this.state.count} <HeartFill /></p>
//             </div>

        
            
//         );
//     }
// }




// export default HornedBeast;

