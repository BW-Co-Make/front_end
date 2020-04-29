import React from "react"
import { Link } from "react-router-dom"
import * as yup from "yup"
import { connect } from "react-redux"
import { userLogin } from "../store/actions/formActions";
// import { formReducer } from "../store/reducers/formReducer"
// import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useForm } from "react-hook-form"
import './styles/LoginForm.css'

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required")
});

const LoginForm = props => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  })

const onSubmit = data => {
  console.log(data)
}

  return (
  <>  
    <div className="form-container">
      <div className="login-form">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            <input 
              placeholder="Username*"
              type="text"
              name="username"
              ref={register}
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </label>
          <label htmlFor="Password">
            <input 
              placeholder="Password*"
              type="password"
              name="password"
              ref={register}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </label>
          <button>Log In</button>
        </form>
      </div>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  </>   
  )
}


export default connect(null, { userLogin })(LoginForm); 
