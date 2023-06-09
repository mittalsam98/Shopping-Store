import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font Awesome icons
const bagIcon = <FontAwesomeIcon icon={ faShoppingBag } />

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar" role="navigation">
                <div className="nav-container">
                   
                    <NavLink exact to="/" className="brand-logo">Mittal</NavLink>
                    <ul className="menu">
                        <li>
                            <div className="menu-category"><Link to="/clothing">Clothing</Link></div>
                            <ul className="dropdown">
                                 <li className="sublink"><Link to="/tops">Tops</Link></li>
                                <li className="sublink"><Link to="/sweaters">Sweaters</Link></li>
                                <li className="sublink"><Link to="/jackets">Jackets</Link></li>
                                <li className="sublink"><Link to="/denim">Denim</Link></li>
                                <li className="sublink"><Link to="/dresses">Dresses</Link></li>
                                <li className="sublink"><Link to="/skirts">Skirts</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="menu-category"><Link to="/shoes">Shoes</Link></div>
                            <ul className="dropdown">
                                <li className="sublink"><Link to="/boots">Boots</Link></li>
                                <li className="sublink"><Link to="/heels">Heels</Link></li>
                                <li className="sublink"><Link to="/sandals">Sandals</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="menu-category"><Link to="/accessories">Accessories</Link></div>
                            <ul className="dropdown">
                                <li className="sublink"><Link to="/purses">Purses</Link></li>
                                <li className="sublink"><Link to="/jewelry">Jewelry</Link></li>
                                <li className="sublink"><Link to="/eyewear">Eyewear</Link></li>
                            </ul>
                        </li>
                        <li className="bag-ico"><NavLink to="/cart">{bagIcon}</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;