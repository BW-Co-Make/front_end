import React from 'react'

const DropdownMenu = () => {
    return (
        <div className={"dropDownDiv"}>
            <p className={"dropDownList"} onClick={() => console.log("HEYYYY")}>Profile</p>
            <p className={"dropDownList"}>Your posts</p>
            <p className={"dropDownList"}>Github</p>
            <p className={"dropDownList"}>About</p>
            <p className={"dropDownListLast"}>Logout</p>
        </div>
    )
}

export default DropdownMenu
