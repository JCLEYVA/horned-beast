import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { Component } from 'react';
import allBeasts from './components/allBeasts.json';

 class App extends Component {
    constructor(props) {
              super(props);
              this.state ={
                  heading: "Make your best opinions known",
                  message: "Your opinion counts!",
              }
            }
            render() {


    return (
      <>
    
      <Header title="Baseball Horns: A Team of Beastly Athlete" /> 
      <Main heading={this.state.heading} allBeasts={allBeasts} />
      <Footer message={this.state.message} />
  
      </>
    );
            }
  }



//     super(props);
//   this.state = {
//     beasts: Data,
//     selectedBeast: {},
//     display: false
//   }
// };
// display = (name) => {
//   const selected = Data.find(beast => beast.title === name);
//   console.log('selected', selected);
//   this.setState({ selectedBeast: selected, display:true });
// };
// onHide = () => {
//   this.setState({ display: false })
//   console.log('onHide called');
// }


export default App;