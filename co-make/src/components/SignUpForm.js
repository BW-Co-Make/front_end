import React, { useState } from 'react'
import * as yup from "yup"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addNewUser } from "../store/actions/formActions";
import { useHistory } from "react-router-dom";

const formSchema = yup.object().shape({
      firstname: yup
      .string()
      .required("First Name is required")
      .min(2, "Must be at least 2 characters"),
      lastname: yup
      .string()
      .required("First Name is required")
      .min(2, "Must be at least 2 characters"),
      password: yup
      .string()
      .min(6, "must be 6 characters long")
      .required("Password is required"),
      location: yup
      .number()
      .required("Zip Code is required")
      .positive()
      .integer()
    });



    
const SignUpForm = (props) => {
  const { push } = useHistory();
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    zipcode: "",
    username: "",
    password: ""
  });

  const handleChanges = e => {
    e.preventDefault();

    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    push('/login')
    props.addNewUser(newUser)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          <input 
            placeholder="First name"
            id="name"
            type="text"
            name="firstname"
            onChange={handleChanges}
            value={newUser.firstname}
          />
        </label><br/>

        <label>
          <input 
          placeholder="Last name"
          id="lastname"
          type="text"
          name="lastname"
          onChange={handleChanges}
          value={newUser.lastname}
          />
        </label><br/>

        <label>
          <input 
          placeholder="Zipcode"
          id="zipcode"
          type="text"
          name="zipcode"
          onChange={handleChanges}
          value={newUser.zipcode}
          />
        </label><br/>

        <label>
          <input 
            placeholder="Username"
            id="username"
            type="text"
            name="username"
            onChange={handleChanges}
            value={newUser.username}
          />
        </label><br/>

        <label>
          <input 
            placeholder="Password"
            id="password"
            type="text"
            name="password"
            onChange={handleChanges}
            value={newUser.password}
          />
        </label><br/>
        <button>Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default connect(null, { addNewUser })(SignUpForm)