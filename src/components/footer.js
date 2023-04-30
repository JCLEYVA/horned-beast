
import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>

                
                    <p>
                    {this.props.message}
                    </p>
                    <footer> Jeanette Leyva </footer>
                    
            </div>
        );
    }
}
export default Footer;
