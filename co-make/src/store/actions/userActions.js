import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios'
import { useParams } from 'react-router-dom';

// signup action
export const addNewUser = newUser => {
    return dispatch => {
        dispatch({type: 'ADD_NEWUSER_START'})
        return axios
        .post("/api/auth/register", newUser)
        .then(response => {   
            console.log(response)
            console.log("hey")        
            dispatch({type: 'ADD_NEWUSER_SUCCESS', payload: newUser })
        })
        .catch(error => {
            dispatch({type: 'ADD_NEWUSER_FAIL', payload: error })
            console.log(error)
        })
    }
}

//login action
export const userLogin = user => {
    console.log("User Login Info", user)
    return dispatch => {
        dispatch({type: 'FETCH_USER_START', payload: user })
        axiosWithAuth()
        .post("/api/auth/login", user)
        .then(res => {
            dispatch({type: 'FETCH_USER_SUCCESS', payload: user })
            localStorage.setItem('token', JSON.stringify(res.data.payload));
        })
        .catch(error => {
            dispatch({type: 'FETCH_USER_FAIL', payload: error })
            console.log(error)
        })
    }
}

//fetching user action
export const fetchUser = () => {
    console.log("Getting User Info...")
    return dispatch => {
        dispatch({type: 'FETCH_USER_START'})
        const { id } = useParams()
        return axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
            dispatch({type: 'FETCH_USER_SUCCESS', payload: res.data })
        })
        .catch(error => {
            dispatch({type: 'FETCH_USER_FAIL', payload: error })
            console.log(error)
        })
    }
}
