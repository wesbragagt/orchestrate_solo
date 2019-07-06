import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.scss";
import { loginUser } from "../Utils/authActions";
import { Logo } from "../Assets/Logo";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = event => {
    const { name, value } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = {
      email: email.value,
      password: password.value
    };

    loginUser(loginData);
  };

  return (
    <div className="loginPage">
      <div className="loginFormContainer">
        <div className="logoContainer">
          <Logo />
        </div>

        <form onSubmit={e => handleSubmit(e)} className="loginForm">
          <div className="formGroup">
            <label htmlFor="email"><h3>Email</h3></label>
            <input
              onChange={e => handleChange(e.target)}
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={email}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password"><h3>Password</h3></label>
            <input
              onChange={e => handleChange(e.target)}
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
            />
          </div>

          <div className="formAction">
            <button className="blueButton" type="submit">
              Sign in
            </button>
            <Link className="signup-now" to="/signup">
              Sign up for an account.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
