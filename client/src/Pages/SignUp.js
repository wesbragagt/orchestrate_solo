import React, { useReducer } from "react";
import { registerUser } from "../Utils/authActions";
import { Logo } from "../Assets/Logo";
import { Link } from "react-router-dom";
import "../Styles/Login.scss";

function SignUp() {
  const InitState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: ""
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  const handleChange = event => {
    const name = event.name;
    const newValue = event.value;
    setState({ [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (State.password === State.password2) {
      registerUser(State);
    } else {
      alert("Passwords don't match.")
    }
  };

  return (
    <div className="loginPage">
      <div className="loginFormContainer">
        <div className="logoContainer">
          <Logo />
        </div>
        <form onSubmit={e => handleSubmit(e)} className="loginForm">
        <div className="formGroup">
            <label htmlFor="first_name">
              <h3>First Name</h3>
            </label>
            <input
              type="text"
              placeholder="First"
              name="first_name"
              value={State.first_name}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="last_name">
              <h3>Last Name</h3>
            </label>
            <input
              type="text"
              placeholder="Last"
              name="last_name"
              value={State.last_name}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <input
              type="text"
              placeholder="johndoe@ie.com"
              name="email"
              value={State.email}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">
              <h3>Password</h3>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={State.password}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={State.password2}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="formAction">
            <button className="blueButton" type="submit">
              Sign Up
            </button>
            <Link className="signup-now" to="/">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
