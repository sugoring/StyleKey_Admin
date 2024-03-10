import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '../reducer/userSlice'; 
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
    /* 페이지 리로드 제한*/
    e.preventDefault();

    /* 유효성 검사 */
    if (!id) {
      return alert("ID를 입력하세요.");
    }
    else if (!pw) {
      return alert("Password를 입력하세요.");
    }
    else {
      let body = {
        id,
        pw
      };
  
      /* axios 통신 */
      axios.post("Endpoint", body)
      .then((res) => {
        console.log(res.data);
        switch (res.data.code) {
          case 200:
            console.log("로그인");
            dispatch(loginUser(res.data.userInfo));
            break;
          case 400:
            setMsg("ID, Password가 비어있습니다.");
            break;
          case 401:
            setMsg("존재하지 않는 ID입니다.");
            break;
          case 402:
            setMsg("Password가 틀립니다.");
            break;
          default:
            break;
        }
      });
    }
    setLoading(true);
  };

  return (
    <>
      <h1>LoginComponent</h1>
      <form onSubmit={LoginFunc}>
        <label htmlFor="id">ID : </label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
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
