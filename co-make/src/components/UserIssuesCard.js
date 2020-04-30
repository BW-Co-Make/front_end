import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from 'react-redux';
import { deletePost } from "../store/actions/issueActions";
import jwt from 'jsonwebtoken';

const UserIssuesCard = props => {
    props.issues && console.log("issues", props.issues);

    const [editData, setEditData] = useState({})

    useEffect(() => {
        props.issues && setEditData({
            Title: props.issues.title,
            Post: props.issues.post
        })
    }, [])

    const handleChange = e => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }
    
    return (
    <div className={"issuescard-container"}>
        {
            props.issues && props.issues.map(item => {
                // console.log("itemitemitemitemitem",item);
                return(
                <div key={item.id} className={"issuescard userCard"}>
                    <AiFillEdit className={"editUsersCard"}/>
                    <AiFillDelete className={"deleteUsersCard"} onClick={() => {props.deletePost(props.issues, item.id)}}/>
                    <form>
                        <label>
                            <input 
                                name="title"
                                type="text"
                                value={editData.Title}
                                onChange={handleChange}
                            />
                        </label>
                        
                        <label>
                            <input 
                                name="post"
                                type="text"
                                value={editData.Post}
                                onChange={handleChange}
                            />
                        </label>
                        <h3>{item.zip_code}</h3>
                    </form>
                </div>
                )
            })
        }
    </div>
    )
}

export default connect(null , { deletePost })(UserIssuesCard)
