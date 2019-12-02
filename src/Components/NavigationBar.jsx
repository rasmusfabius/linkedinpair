import React, { Component } from 'react';
import { Container } from 'reactstrap';

class NavigationBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light' id='navbar-color'>
        <Container>
          <a className='navbar-brand' href='#'>
            <i class='fab fa-linkedin fa-2x'></i>
          </a>

          <form className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
          </form>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  My Network
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' href='#'>
                  Job
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='#'>
                  Messaging
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='#'>
                  Notifications
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Me
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    );
  }
}

export default NavigationBar;
