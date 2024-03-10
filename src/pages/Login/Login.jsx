import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from ".../reducer/userSlice.js";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [loding, setIdLoding] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    /* ...  */
  }, [msg]);

  const LoginFunc = (e) => {
    e.preventDefault();
    /* ...  */
  };

  return (
    <>
      <h1>LoginComponent</h1>
      <form onSubmit={LoginFunc}>
        <label htmlFor="id">ID : </label>
        <input type="text" id="id" />
        <br />
        <label htmlFor="password">Password: </label> <input type="password" />
        <br />
        <button type="submit"></button>
        <br />
        {msg}
      </form>
    </>
  );
}

export default Login;
