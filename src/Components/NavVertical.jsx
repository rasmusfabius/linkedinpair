import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
class NavVertical extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-sticky navVertical">
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="#">Charts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">New Releases</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        );
    }
}
export default NavVertical;