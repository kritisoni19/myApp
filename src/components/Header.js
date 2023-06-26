
import React from 'react';
import { Link} from 'react-router-dom';

import "../App.css"
function Header(){
    return(
        <>
           <div className="nav_parent">
               <img src="../images/swiggylogo.png" alt="swiggy logo"/>
                <div className="nav_container">
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about">About Us</Link></li>
                        <li> <Link to="/contact">Contact us</Link></li>
                    </ul>
            
                </div>
           </div>
        </>
    )
}

export default Header;