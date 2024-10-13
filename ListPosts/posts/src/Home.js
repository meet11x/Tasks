import React from "react";
import { useNavigate } from "react-router-dom";
import "./posts.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <div className="home">
        <button className="homebtn" onClick={() => navigate("/signin")}>
          Task 1{" "}
        </button>
        <button className="homebtn" onClick={() => navigate("/signup")}>
          Task 2
        </button>
        <button className="homebtn" onClick={() => navigate("/crud")}>
          Task 3
        </button>
      </div>
    </div>
  );
};

export default Home;
