import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-tab">
        <div>
          <h1>Signup</h1>
        </div>
        <form action="#" className="signupForm">
          <div className="name">
            <div className="fName">
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className="lName">
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="email">
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="phone">
            <input type="number" name="phone" placeholder="Phone Number" />
          </div>
          <div className="newPassword">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
            />
          </div>
          <div className="confirmPassword">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button className="signupButton" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
