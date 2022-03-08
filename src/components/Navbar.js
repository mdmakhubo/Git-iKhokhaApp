import React, {Component} from 'react';
import menubar from '../assets/menubar.svg';
import closebar from '../assets/closebar.svg';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen          
        })
    }    

  
  render() {
    return (
      <nav className='my-navbar'>
          <div className='my-nav-center'>
              <div className='my-nav-header'>                  
                  <button 
                    type='button' 
                    className='my-nav-btn'
                    onClick={this.handleToggle}
                    >
                      <img src={this.state.isOpen ? closebar : menubar} className="nav-icon" alt='menubar-icon' />
                  </button>
              </div>
              <ul className={this.state.isOpen ? "my-nav-links show-nav" : "my-nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
              </ul>
              <Link to="/" className='nav-logo'>
                <img src={logo} alt="main-logo" />
            </Link>
            <ul className={this.state.isOpen ? "my-nav-links show-nav2" : "my-nav-links"}>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
              </ul>
          </div>
      </nav>
    )
  }
}


