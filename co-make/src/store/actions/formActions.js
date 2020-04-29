import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const addNewUser = newUser => {
    // return dispatch => {
        // dispatch({type: 'ADD_NEWUSER_START'})
        return axiosWithAuth()
        .post("/api/auth/register", newUser)
        .then(response => {   
            console.log(response)        
            // dispatch({type: 'ADD_NEWUSER_SUCCESS', payload: newUser })
        })
        .catch(error => {
            // dispatch({type: 'ADD_NEWUSER_FAIL', payload: error })
            console.log(error)
        })
    // }
}

export const userLogin = user => {
    console.log("User Login Info", user)
    // return dispatch => {
        // dispatch({type: 'FETCH_USER_START', payload: user })
        axiosWithAuth()
        .post("/api/auth/login", user)
        .then(res => {
            // dispatch({type: 'FETCH_USER_SUCCESS', payload: user })
            localStorage.setItem('token', JSON.stringify(res.data.payload));
        })
        .catch(error => {
            // dispatch({type: 'FETCH_USER_FAIL', payload: error })
            console.log(error)
        })
    // }
}
