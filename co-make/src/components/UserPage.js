import jwt from 'jsonwebtoken'
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { axiosWithAuth } from "../utils/axiosWithAuth"
import './styles/UserPage.css'
import { AiFillEdit } from "react-icons/ai";
import { fetchUser } from '../store/actions/userActions'
import ProtectedNavBar from "../components/ProtectedNavBar"

const UserPage = props => {
    // console.log(props.user)
    const [disabled1, setDisabled1] = useState(true);
    const [disabled2, setDisabled2] = useState(true);
    const [disabled3, setDisabled3] = useState(true);
    // const [disabled4, setDisabled4] = useState(true);
    // const [disabled5, setDisabled5] = useState(true);
    
    const [userFormData, setUserFormData] = useState({});
    const [dataPushedUp, setDataPushedUp] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userInfo = jwt.decode(token)
        console.log(userInfo)
        props.fetchUser(userInfo.userId)
    }, [])

    useEffect(()=>{
        props.user && setUserFormData({
            ...userFormData,
            id: props.user.id,
            firstName: props.user.first_name,
            lastName: props.user.last_name,
            username: props.user.username,
            // password: props.user.password,
            // location: props.user.zip_code
        })
    }, [props.isFetching])

    console.log("THIS IS DATA PUSHED UP", dataPushedUp);
    console.log("THIS IS USER FORM DATA", userFormData);

    const handleChange = e => {
        e.preventDefault();
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        setDataPushedUp({
            id: userFormData.id,
            username: userFormData.username,
            first_name: userFormData.firstName,
            last_name: userFormData.lastName
        })
        console.log("This is SUCCESS from SUCCESS", dataPushedUp)
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/users/${props.user.id}`, dataPushedUp)
        .then(response => {
            console.log(response)
            console.log("This is SUCCESS from SUCCESS", dataPushedUp)

        })
        .catch(error => {
            console.log("This is error from error", dataPushedUp)
            console.log(error)
        })
    }    

    return (
        <>
        <ProtectedNavBar />
        <div className={"userPageDiv"}>
            <h1 className={"userInfoTitle"}>User Info: </h1>
            <div className={"userMapDiv"}>
                <form onSubmit={handleSubmit}>
                    <h4 className={"moveLeftHeaders"}>First name:</h4>
                    <label htmlFor="update first name">
                        <input 
                            name="firstName"
                            type="text"
                            placeholder="Type in new first name"
                            value={userFormData.firstName}
                            onChange={handleChange}
                            disabled={disabled1}
                        />  
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled1(!disabled1)}/>

                    <h4 className={"moveLeftHeaders"}>Last name:</h4>
                    <label htmlFor="update last name">
                        <input 
                            name="lastName"
                            placeholder="Type in new first name"
                            type="text"
                            value={userFormData.lastName}
                            onChange={handleChange}
                            disabled={disabled2}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled2(!disabled2)}/>

                    <h4 className={"moveLeftHeaders"}>Username:</h4>
                    <label htmlFor="update username">
                        <input 
                            name="username"
                            placeholder="Type in new first name"
                            type="text"
                            value={userFormData.username}
                            onChange={handleChange}
                            disabled={disabled3}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled3(!disabled3)}/>

                    {/* <h4 className={"moveLeftHeaders"}>Password:</h4> */}
                    {/* <label htmlFor="update password">
                        <input 
                            name="password"
                            placeholder="Type in new first name"
                            type="password"
                            value={userFormData.password}
                            onChange={handleChange}
                            disabled={disabled4}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled4(!disabled4)}/> */}

                    {/* <h4 className={"moveLeftHeaders"}>Zipcode:</h4>
                    <label htmlFor="update location">
                        <input 
                            name="location"
                            placeholder="Type in new first name"
                            type="text"
                            value={userFormData.location}
                            onChange={handleChange}
                            disabled={disabled5}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled5(!disabled5)}/> */}
                    <button>Update Info</button>
                </form>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        isFetching: state.user.isFetching
    }
}

export default connect(mapStateToProps, { fetchUser })(UserPage)