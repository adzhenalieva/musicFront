import React, {Fragment} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink, UncontrolledDropdown
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Music-fm</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/" exact>Artists</NavLink>
                </NavItem>
                {user ? (
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Hello, {user.username}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink tag={RouterNavLink} to="/track_history" exact>Track History</NavLink>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem className="ml-2" onClick={logout}>
                                Log out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                ) : (
                    <Fragment>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/login" exact>Login</NavLink>
                        </NavItem>
                    </Fragment>)}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;