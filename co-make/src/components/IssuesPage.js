import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom'
import IssuesCard from './IssuesCard'
import "./styles/IssuesPage.css"
import ProtectedNavBar from "./ProtectedNavBar";

const IssuesPage = () => {
    const [userData, setUserData] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axiosWithAuth()
        .get(`api/locations/issues/3`)
        .then(response => {
            console.log(response.data)
            setUserData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

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
