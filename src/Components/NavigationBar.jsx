import React, { Component } from 'react';
import { Nav, NavItem, InputGroupAddon, Input, NavLink, InputGroupText, Navbar, NavbarBrand, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faSearch, faHome, faUsers, faComments, faBell, faTh } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className='nav-top  '>
        <Nav className='mx-auto'>
          <NavbarBrand href='/'>
            <FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} />
          </NavbarBrand>
          <NavItem>
            <div className='search-div'>
              <InputGroup className='search-input'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <FontAwesomeIcon className='icon-search' icon={faSearch} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input className='main-input' placeholder='Search' />
              </InputGroup>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faHome} />
              <NavLink href='#'>Home</NavLink>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faUsers} />
              <NavLink href='#' active>
                My Network
              </NavLink>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faBriefcase} />
              <NavLink href='#'>Jobs</NavLink>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faComments} />
              <NavLink href='#'>Messaging</NavLink>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faBell} />
              <NavLink href='#'>Notifications</NavLink>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <div className='profile-image-div'></div>
              <NavLink href='#'>Me</NavLink>
            </div>
          </NavItem>
          <div className='vl'></div>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faTh} />
              <NavLink href='#'>Work</NavLink>
            </div>
          </NavItem>
          <NavItem>
            <div className='nav-item-div'>
              <FontAwesomeIcon className='nav-icon' icon={faHome} />
              <NavLink href='#'>Learning</NavLink>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
