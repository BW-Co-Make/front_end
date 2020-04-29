import React, { useState } from 'react';
import "./styles/NavBar.css";
// import DropdownMenu from "./DropdownMenu";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaUserAlt } from "react-icons/fa";
import { withRouter } from 'react-router-dom';

const ProtectedNavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className={"bigDiv"}>
            <h1 className={"headerTitle"}>Co-Make</h1>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle style={{backgroundColor: "maroon"}} caret>
                    <FaUserAlt />{" "}
                    </DropdownToggle>
                <DropdownMenu style={{left: "-100px"}} className={"dropDownBackgroundColor"}>
                    <DropdownItem className={"dropDownColor"}>Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"}>Your posts</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"}>Github</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"}>About</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default ProtectedNavBar