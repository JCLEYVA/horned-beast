import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import allBeasts from './components/allBeasts.json';
import SelectedBeast from './components/SelectedBeast.js';
// import { render } from '@testing-library/react';


class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      heading: "Make your best opinions known",
      message: "Your opinion counts!",
      showModal: false,
      SelectedBeast: {},
      title: '',
      src: '',
      description: '',
    };
  }
  handleModalOpen = (beast) => {
    this.setState({
      showModal: true,
  
    })
  }
  handleModalClose = () => {
    this.setState({
      showModal: false,
  
  
    })
  }
  
  getSelectedMethod = (title, src, description) => {
    this.setState({
      title: title,
      src: src,
      description: description,
    });
    this.handleModalOpen();
  };



render(){
  return (
   <>
     <Header title="Baseball Horns: A Team of Beastly Athlete" />
     <Main heading={this.state.heading} allBeasts={allBeasts} onImageClick={this.handleModalOpen} getSelectedMethod={this.getSelectedMethod} />
     <Footer message={this.state.message} />
     <SelectedBeast
       show={this.state.showModal}
       onClose={this.handleModalClose}
       title={this.state.title}
       src={this.state.src}
       description={this.state.description} />
   </>
 );
 }
}

export default App;