import React, { useState } from 'react';
import "./styles/NavBar.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaUserAlt } from "react-icons/fa";
import { useHistory, useParams } from 'react-router-dom';

const ProtectedNavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { push } = useHistory();
    const { id } = useParams();

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const pushToProfile = e => {
        push(`/profile/${id}`)
    }

    const pushToIssues = e => {
        console.log("hey")
    }

    return (
        <div className={"bigDiv"}>
            <h1 className={"headerTitle"}>Co-Make</h1>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle style={{backgroundColor: "maroon"}} caret>
                    <FaUserAlt />{" "}
                    </DropdownToggle>
                <DropdownMenu style={{left: "-100px"}} className={"dropDownBackgroundColor"}>
                    <DropdownItem className={"dropDownColor"} onClick={pushToProfile}>Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"} onClick={pushToIssues}>Your posts</DropdownItem>
                    <DropdownItem divider />
                    <a href="https://github.com/BW-Co-Make" style={{textDecoration: "none"}} target="_blank"><DropdownItem className={"dropDownColor"} >Github</DropdownItem></a>
                    <DropdownItem divider />
                    <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B3%D0%B3,_%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D1%81" style={{textDecoration: "none"}} target="_blank"><DropdownItem className={"dropDownColor"}>About</DropdownItem></a>
                    <DropdownItem divider />
                    <DropdownItem className={"dropDownColor"}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default ProtectedNavBar