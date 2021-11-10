import React, {Component} from 'react';

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
                { this.props.titulo }
            </a>
        </nav>
        )
    }
}


/*function Navigation() {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    
                </a>
            </nav>
        </div>
    );
}*/

export default Navigation;