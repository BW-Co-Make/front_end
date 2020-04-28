const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    location: '',
    isFetching: ''
}

export const formReducer = (state = initialState, action) => {
    switch(action.type){
        // Sign Up Cases
        case 'ADD_NEWUSER_START': 
        return {
            ...state,
        }
        case 'ADD_NEWUSER_SUCCESS': 
        return {
            ...state,
            error:''
        }

        case 'ADD_NEWUSER_FAILURE': 
        return {
            ...state,
            error: action.payload
        }

        // Log In Cases
        case 'FETCH_USER_START': 
        return {
            ...state,
        }
        case 'FETCH_USER_SUCCESS': 
        return {
            ...state,
            error:''
        }

        case 'FETCH_USER_FAILURE': 
        return {
            ...state,
            error: action.payload
        }
        default:
        return state;
    }
}