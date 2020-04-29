import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom'
import IssuesCard from './IssuesCard'
import "./styles/IssuesPage.css"
import ProtectedNavBar from "./ProtectedNavBar";


const issues = [
    {
    "id": 2,
    "zip_code": "80537",
    "title": "Pothole",
    "post": "Its ruining all the cars!",
    "upvote": 0,
    "userId": 4,
    "locationsId": 3
    },
    {
    "id": 3,
    "zip_code": "80537",
    "title": "Dogs barking",
    "post": "Neighbors dogs never stop barking!",
    "upvote": 0,
    "userId": 4,
    "locationsId": 3
    },
    {
    "id": 4,
    "zip_code": "80537",
    "title": "Loud Music",
    "post": "Good music just too loud",
    "upvote": 0,
    "userId": 1,
    "locationsId": 3
    }
]


const IssuesPage = () => {
    const [userData, setUserData] = useState(issues);
    const { id } = useParams()

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get(`api/locations`)
    //     .then(response => {
    //         console.log(response)
    //         setUserData(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    return (
        <>
            <ProtectedNavBar/>
            <div className="issues-container">
                <h1>Hello from Issues Page!</h1>
                <IssuesCard userData={userData}/>
            </div>
        </>
    )
}

export default IssuesPage
