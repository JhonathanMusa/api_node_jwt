import Axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginInput } from "../components/LoginInput";

const urlRegister = "http://localhost:5000/api/user/register";

export const Register = () => {
  const [dataUser, setDataUser] = useState([]);

  let history = useHistory();

  const inputHandler = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const registerUser = async () => {
      try {
        const { data } = await Axios.post(urlRegister, dataUser);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    registerUser();
    setDataUser([]);
    history.push("/");

    console.log(dataUser);
  };

  return (
    <div className="container">
      <div className="title-login">
        <p>Register</p>
      </div>
      <form className="form-register" onSubmit={submitHandle}>
        <div>
          <LoginInput
            name={"name"}
            handleChange={inputHandler}
            placeholder={"Name"}
            type={"text"}
          />
        </div>
        <div>
          <LoginInput
            name={"email"}
            handleChange={inputHandler}
            placeholder={"Email"}
            type={"email"}
          />
        </div>
        <div>
          <LoginInput
            name={"password"}
            handleChange={inputHandler}
            placeholder={"Password"}
            type={"password"}
          />
        </div>
        <div>
          <button className="form-register__button">Register</button>
        </div>
        <div className="account-info">
          Already has an account?{" "}
          <Link to="/login" className="redirect">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};
