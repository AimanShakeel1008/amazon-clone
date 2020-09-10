import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Amazon-Logo.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Login;
