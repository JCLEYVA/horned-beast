import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import imageUrls from './components/imageUrls.json';

  function App() {
    return (
      <>
      <Header title="Baseball Horns: A Team of Beastly Athletes" />
      <Main heading="Make your best opinion known!" imageUrls={imageUrls} />
      <Footer message="You opinion counts!" />
      
      </>
    );
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