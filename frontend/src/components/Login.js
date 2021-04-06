import React, { useState } from "react";
import Axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState([]);

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
        const { data } = await Axios.post(
          "http://localhost:5000/api/user/login",
          userData
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loginUser();
  };

  return (
    <div className="container">
      <div className="title-login">
        <p>Login</p>
      </div>
      <form className="form-login" onSubmit={submitHandle}>
        <div>
          <input
            className="form-login__input"
            name="email"
            onChange={inputHandler}
            placeholder="Email"
            type="email"
          />
        </div>

        <div>
          <input
            className="form-login__input"
            name="password"
            onChange={inputHandler}
            placeholder="Pass"
            type="password"
          />
        </div>
        <div>
          <button className="form-login__button">Log-in</button>
        </div>
        <div>Already has an account?</div>
      </form>
    </div>
  );
}
