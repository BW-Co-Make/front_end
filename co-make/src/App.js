import React from "react"
import { Route, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import styled from "styled-components"
import PrivateRoute from "./components/ProtectedRoute"

const App = () => {
  return (
      
    <div className="App">
      <h1>Co Make</h1>
      <Route exact path="/" component={LoginForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/signup" component={SignUpForm}/>
      <PrivateRoute exact path="/issues"/>
    </div>
  );
};
export default App;