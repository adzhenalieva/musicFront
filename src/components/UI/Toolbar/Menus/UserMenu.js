import React, {Fragment} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => (
    <UncontrolledDropdown nav inNavbar>

        <DropdownToggle nav caret>
            Hello, {user.username}
        </DropdownToggle>
        <DropdownMenu right>
            {user.role === 'user' ?
                <Fragment>
            <DropdownItem>
                <NavLink tag={RouterNavLink} to="/track_history" exact>Track History</NavLink>
            </DropdownItem>
            <DropdownItem>
                <NavLink tag={RouterNavLink} to="/artists/new" exact>Add new artist</NavLink>
            </DropdownItem>
            <DropdownItem>
                <NavLink tag={RouterNavLink} to="/albums/new" exact>Add new album</NavLink>
            </DropdownItem>
            <DropdownItem>
                <NavLink tag={RouterNavLink} to="/tracks/new" exact>Add new track</NavLink>
            </DropdownItem>
                </Fragment>
                : null }
            <DropdownItem divider/>
            <DropdownItem className="ml-2" onClick={logout}>
                Log out
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default UserMenu;