import { useState } from "react";
import * as React from "react";
import "./css/Login.css";
import Notification from "./Notification.js";
import { useNavigate } from "react-router-dom";

const Login = ({ startLogin, notification, notificationType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };

    startLogin(credentials) && navigate("/admin");
  };

  return (
    <div class="center">
      <form class="haa" onSubmit={handleLogin}>
        <div class="login_field">
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>
          <span></span>
          <label>Email</label>
        </div>

        <div class="login_field">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login"></input>
        <Notification notification={notification} type={notificationType} />
      </form>
    </div>
  );
};

export default Login;
