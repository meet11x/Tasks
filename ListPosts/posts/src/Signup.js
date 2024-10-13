import React from "react";
import { FaKey, FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img from "./3856358.jpg";
import "./posts.css";

const Signup = () => {
  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <div className="main2">
        <div className="inner1">
          <h3>Sign up</h3>
          <form>
            <div className="signup">
              <FaUser style={{ marginBlock: "auto" }} />
              <input type="text" placeholder="Your name" />
            </div>
            <div className="signup">
              <MdEmail style={{ marginBlock: "auto" }} />
              <input type="email" placeholder="Your email" />
            </div>
            <div className="signup">
              <FaLock style={{ marginBlock: "auto" }} />
              <input type="password" placeholder="Your password" />
            </div>
            <div className="signup">
              <FaKey style={{ marginBlock: "auto" }} />
              <input type="password" placeholder="repeat your password" />
            </div>
            <div className="rem">
              <input type="checkbox" id="remember" name="remember" />
              &nbsp;I agree all statements in{" "}
              <span style={{ color: "blue" }}>&nbsp;Terms of service</span>
            </div>
            <div className="btn">
              <button className="register">REGISTER</button>
            </div>
          </form>
        </div>
        <div className="inner2">
          <img src={img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
