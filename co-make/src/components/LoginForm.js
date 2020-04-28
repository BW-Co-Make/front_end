import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as yup from "yup"
import { connect } from "react-redux"
import { formReducer } from "../store/reducers/formReducer"
import { useHistory } from "react-router-dom";
import { userLogin } from "../store/actions/formActions";

const formSchema = yup.object().shape({
  username: yup
  .string()
  .min(2, "Must be at least 2 characters")
  .required("Username is required"),
  password: yup
  .string()
  .min(6, "must be at least 6 characters")
  .required("Password is required"),
});

const initialFormValues = {
  username: "",
  password: "",
}
const initialFormErrors = {
  username: "",
  password: "",
};



const LoginForm = props => {

    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [formDisabled, setFormDisabled] = useState(true);

    const {
      values,
      onCheckboxChange,
      onSubmit,
      disabled,
      errors,
    } = props

    const onInputChange = event => {
      const name = event.target.name
      const value = event.target.value
      
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid =>{
          setFormErrors({
            ...formErrors,
            [name]: "",
          })
        })
        .catch(invalid =>{
          console.log(invalid)
          setFormErrors({
            ...formErrors,
            [name]: invalid.message
          })
        })
      setFormValues({
        ...formValues,
        [name]: value
      })
    }
    
    
  

    const handleChange = (e) => {
      e.persist()
    }
      
    const handleSubmit = (e) => {
      e.preventDefault();

      props.userLogin(formValues)
      push('/issues')
    }
  

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
      {formErrors.username}
        <label>
          <input 
            placeholder="Username"
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            value={initialFormValues.username}
        
          />
        </label><br/>
        <label>
        {formErrors.password}
          <input 
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={initialFormValues.password}
            
          />
        </label><br/>
        <button>Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>   
  )
}


export default connect(null, { userLogin })(LoginForm); 
