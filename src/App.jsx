import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import "./App.css";


export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app-container">
      <h1>React Forms Workshop</h1>
      <div className="forms-container">
        <SignUpForm setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </div>
    </div>
  );
}
