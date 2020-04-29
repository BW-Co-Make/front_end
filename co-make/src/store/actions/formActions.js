import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const addNewUser = (newUser) => {
    console.log(newUser)
    return dispatch => {
        dispatch({type: 'ADD_NEWUSER_START'})
        axiosWithAuth()
        .post("/api/auth/register", newUser)
        .then(response => {
            dispatch({type: 'ADD_NEWUSER_SUCCESS', payload: newUser })
            console.log(response)
        })
        .catch(error => {
            dispatch({type: 'ADD_NEWUSER_FAIL', payload: error })
            console.log(error)
        })
    }
}

export const userLogin = (user) => {
    console.log(user)
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
