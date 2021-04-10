import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [dataUser, setDataUser] = useState([]);

  const inputHandler = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const addData = async () => {
      try {
        const { data } = await Axios.post(
          "http://localhost:5000/api/user/register",
          dataUser
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    addData();

    console.log(dataUser);
  };

  return (
    <div className="container">
      <div className="title-login">
        <p>Register</p>
      </div>
      <form className="form-register" onSubmit={submitHandle}>
        <div>
          <input
            className="form-register__input"
            name="name"
            onChange={inputHandler}
            placeholder="Name"
            type="text"
          />
        </div>
        <div>
          <input
            className="form-register__input"
            name="email"
            onChange={inputHandler}
            placeholder="Email"
            type="email"
          />
        </div>
        <div>
          <input
            className="form-register__input"
            name="password"
            onChange={inputHandler}
            placeholder="Password"
            type="password"
          />
        </div>
        <div>
          <button className="form-register__button">Register</button>
        </div>
        <div className="account-info">
          Already has an account? <Link to="/login" className="redirect">Sign In</Link>
        </div>
      </form>
    </div>
  );
}
