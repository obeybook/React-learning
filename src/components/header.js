import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/red">Red</Link>    
                    </li>
                    <li>
                        <Link to="/green">Green</Link>    
                    </li>
                    <li>
                        <Link to="/blue">Blue</Link>    
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header