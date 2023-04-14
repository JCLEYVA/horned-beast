
import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>

                <Footer>
                    <p>
                    {this.props.message}
                    </p>
                    
                    </Footer>
            </div>
        );
    }
}
export default Footer;

//   <Header title="Horned Beast" />
//         <Main allBeasts={this.state.beasts} display={this.display} />
//         <SelectedBeast
//           beast={this.state.selectedBeast}
//           display={this.state.display}
//           onHide={this.onHide}
//         />