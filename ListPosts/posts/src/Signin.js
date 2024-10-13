import React from "react";
import "./posts.css";
const Signin = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="main">
        <div className="inner">
          <h3>Sign In</h3>
          <form>
            <div className="inputs">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="inputs">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <div className="rem">
              <input type="checkbox" id="remember" name="remember" />
              &nbsp;Remember me
            </div>
            <button type="submit">Submit</button>
          </form>
          <h6>
            Forgot <a href="#">password ? </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Signin;
