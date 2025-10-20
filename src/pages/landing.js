import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "center", height: "100vh", background: "linear-gradient(to right, #6a11cb, #2575fc)", color: "white", textAlign: "center"
    }}>
      <h1>Welcome to Mid_Devops App</h1>
      <p>Build modern web apps with React, Firebase, and Kubernetes</p>
      <div>
        <button onClick={() => navigate("/login")} style={{margin: "0 10px", padding: "10px 20px"}}>Login</button>
        <button onClick={() => navigate("/register")} style={{margin: "0 10px", padding: "10px 20px"}}>Register</button>
      </div>
    </div>
  );
}

export default Landing;
