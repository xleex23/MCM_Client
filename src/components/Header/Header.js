import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Header.css';

class Header extends Component {

  state = {
    isOpen: false
  }


  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="nav-home">MediationMN</h1>
        <div className="menu-icon" onClick={this.toggleMenu}>
          <i className={this.state.isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.isOpen ? 'nav-menu open' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={this.toggleMenu}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Header;