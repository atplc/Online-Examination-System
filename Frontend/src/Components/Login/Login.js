import React from "react";
import { Link } from "react-router-dom";

import "../Signup/Signup.css";

const Login = () => {
  return (
    <div className="signup-container">
      <div className="signup-tab">
        <div>
          <h1>Login</h1>
        </div>
        <form action="#" className="signupForm">
          <div className="email">
            <input type="email" name="email" placeholder="email" />
          </div>

          <div className="newPassword">
            <input type="password" name="password" placeholder="Password" />
          </div>

          <button className="signupButton" type="submit">
            Login
          </button>
          <button
            className="signupButton"
            style={{ display: "block", margin: "2rem auto" }}
            type="submit"
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Go Back
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
