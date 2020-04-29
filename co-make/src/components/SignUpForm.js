import React from 'react'
import * as yup from "yup"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addNewUser } from "../store/actions/formActions";
import { useForm } from "react-hook-form"

const schema = yup.object().shape({
      firstname: yup.string().required("First Name is required").min(2, "Must be at least 2 characters"),
      lastname: yup.string().required("Last Name is required").min(2, "Must be at least 2 characters"),
      password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
      location: yup.string().min(5, "Zip Code must be at least 5 characters long").required("Zip Code is required"),
      username: yup.string().required("Username is required").min(2, "Must be at least 2 characters")
    });

const SignUpForm = (props) => {

  
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  })

const onSubmit = data => {
  console.log(data)
}

  return (
    <div className="form-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstname">
            <input 
              placeholder="First Name*"
              type="text"
              name="firstname"
              ref={register}
            />
          </label>
          {errors.firstname && <p className="error">{errors.firstname.message}</p>}
          <br/>

          <label htmlFor="lastname">
            <input 
            placeholder="Last name*"
            type="text"
            name="lastname"
            ref={register}
            />
          </label>
          {errors.lastname && <p className="error">{errors.lastname.message}</p>}
          <br/>

          <label htmlFor="username">
            <input 
              placeholder="Username*"
              type="text"
              name="username"
              ref={register}
            />
          </label>
          {errors.username && <p className="error">{errors.username.message}</p>}
          <br/>

          <label htmlFor="password">
            <input 
              placeholder="Password*"
              type="text"
              name="password"
              ref={register}
            />
          </label>
          {errors.password && <p className="error">{errors.password.message}</p>}
          <br/>

          
          <label htmlFor="zipcode">
            <input 
            placeholder="Zipcode*"
            type="text"
            name="location"
            minLength="5"
            ref={register}
            />
          </label>
          {errors.location && <p className="error">{errors.location.message}</p>}
          <br/>

          <button>Sign Up</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default connect(null, { addNewUser })(SignUpForm)