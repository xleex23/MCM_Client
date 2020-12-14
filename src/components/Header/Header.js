import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { isTemplateElement } from '@babel/types';

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
        <div className="menu-icon">

        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
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