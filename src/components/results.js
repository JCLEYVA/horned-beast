import React from 'react';
import Card from 'react-bootstrap/Card';

 class Results extends React.Component {

   render() {
    console.log(this.props.SelectedBeast);
     return (
       <Card style={{width:'20rem' }}>
         <Card.Img variant="top" src={this.props.SelectedBeast.image_url} />
        <Card.Body>
          <Card.Title>
          {this.props.SelectedBeast.title}
          </Card.Title>
        </Card.Body>
        <Card.Text>
        {this.props.SelectedBeast.description}
        </Card.Text>
       </Card>
     )
   }
 }

 export default Results;
