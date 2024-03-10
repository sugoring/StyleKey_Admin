import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '../reducers/userSlice'; 
import axios from "axios";

function Login() {
  let user = useSelector((state) => {return state.user});
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  
  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg]);
  const LoginFunc = (e) => {
    e.preventDefault(); // Prevent page reload
  
    if (!id || !pw) {
      setMsg("ID와 Password를 입력하세요."); // Combined validation message
      return;
    }
  
    setLoading(true);
    setMsg(""); // Clear any previous messages
  
    let body = {
      id,
      pw
    };

    axios.post("/api/v1/auth/login", body)
      .then((res) => {
        if (res.data.code === 200) { 
          console.log("로그인 성공");
          dispatch(loginUser(res.data.data));
        } else {
          setMsg(`${res.data.status}: ${res.data.message}`);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setMsg("로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  return (
    <>
      <h1>관리자 로그인</h1>
      <form onSubmit={LoginFunc}>
        <label htmlFor="id">ID : </label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <label htmlFor="id">Password : </label>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)}/>
        <br />
        <button type="submit" disabled={loading}>로그인</button>
        <br />
        {msg}
      </form>
    </>
  );
}

export default Login;
