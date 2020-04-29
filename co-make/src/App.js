import React from "react"
import { Route } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import PrivateRoute from "./components/ProtectedRoute"
import IssuesPage from "./components/IssuesPage"
import SignUpNavBar from "./components/SignUpNavBar";
import UserPage from "./components/UserPage";

const App = () => {
  return (
      
    <div className="App">
      <SignUpNavBar />
      <Route path="/profile" component={UserPage} />
      <Route exact path="/" component={SignUpForm}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/issues" component={IssuesPage}/>
    </div>
  );
};
export default App;