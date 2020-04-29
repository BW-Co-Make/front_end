import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import './styles/UserPage.css'
import { AiFillEdit } from "react-icons/ai";

const userData1 = {
    // "id": 1,
    "username": "fastestmanalive",
    "first_name": "Barry",
    "last_name": "Allen",
    "zip_code": "73645"
}


const UserPage = () => {
    const [userData, setUserData] = useState(userData1);
    const [disabled1, setDisabled1] = useState(true);
    const [disabled2, setDisabled2] = useState(true);
    const [disabled3, setDisabled3] = useState(true);
    const [disabled4, setDisabled4] = useState(true);
    const [disabled5, setDisabled5] = useState(true);
    
    const [userFormData, setUserFormData] = useState({
        firstName: userData.first_name,
        lastName: userData.last_name,
        username: userData.username,
        password: userData.password,
        location: userData.zip_code,
    });
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(response => {
            console.log(response);
            push(`/profile/${response.data.id}`)
            setUserData(response);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const handleChange = e => {
        e.preventDefault();
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(``, )
    }    

    return (
        <div className={"userPageDiv"}>
            <h1 className={"userInfoTitle"}>User Info: </h1>
            <div className={"userMapDiv"}>
                <form onSubmit={handleSubmit}>
                    <h4 className={"moveLeftHeaders"}>First name:</h4>
                    <label htmlFor="update first name">
                        <input 
                            name="firstName"
                            type="text"
                            placeholder={userData.first_name}
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
                            placeholder={userData.last_name}
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
                            placeholder={userData.username}
                            type="text"
                            value={userFormData.username}
                            onChange={handleChange}
                            disabled={disabled3}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled3(!disabled3)}/>

                    <h4 className={"moveLeftHeaders"}>Password:</h4>
                    <label htmlFor="update password">
                        <input 
                            name="password"
                            placeholder={userData.password}
                            type="password"
                            value={userFormData.password}
                            onChange={handleChange}
                            disabled={disabled4}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled4(!disabled4)}/>

                    <h4 className={"moveLeftHeaders"}>Zipcode:</h4>
                    <label htmlFor="update location">
                        <input 
                            name="location"
                            placeholder={userData.zip_code}
                            type="text"
                            value={userFormData.location}
                            onChange={handleChange}
                            disabled={disabled5}
                        />
                    </label>
                    <AiFillEdit className={"userEditButton"} onClick={() => setDisabled5(!disabled5)}/>
                    <button>Update Info</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {})(UserPage)