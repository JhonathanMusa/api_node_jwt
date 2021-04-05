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
    <div>
      <form onSubmit={submitHandle}>
        <p>
          <input
            type="email"
            placeholder="Email"
            onChange={inputHandler}
            name="email"
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Pass"
            onChange={inputHandler}
            name="password"
          />
        </p>
        <button>Log-in</button>
      </form>
    </div>
  );
}
