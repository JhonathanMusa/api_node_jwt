import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { LoginInput } from "../components/LoginInput";

const urlLogin = "http://localhost:5000/api/user/login";

export const Login = () => {
  const [userData, setUserData] = useState([]);

  let history = useHistory();

  const inputHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(userData);

    const loginUser = async () => {
      try {
        const { data } = await Axios.post(urlLogin, userData);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loginUser();
    history.push("/");
  };

  return (
    <div className="container">
      <div className="title-login">
        <p>Login</p>
      </div>
      <form className="form-login" onSubmit={submitHandle}>
        <div>
          <LoginInput
            handleChange={inputHandler}
            name={"email"}
            placeholder={"Email"}
            type={"text"}
          />
        </div>

        <div>
          <LoginInput
            handleChange={inputHandler}
            name={"password"}
            placeholder={"Pass"}
            type={"password"}
          />
        </div>
        <div>
          <button className="form-login__button">Log-in</button>
        </div>
        <div className="account-info">
          New Costumer?{" "}
          <Link to="/register" className="redirect">
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};
