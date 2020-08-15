import React, {useState} from "react";
import "./Styles/Loginpage.css";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) =>{
      event.preventDefault(); // chặn hành động khi refresh !!!
      // chuẩn global form login 
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) =>{
          history.push('/');
          // login chuyển hướng về home page
        })
        .catch((e) => alert(e.message));

  };
  const register = (event) =>{
      event.preventDefault(); // chặn hành động khi refresh !!!
      // chuẩn global form register 
      // nó sẽ tạo tài khoảng theo logic

      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
          history.push('/');
          //create user and password và chuyển hướng về home pase
        })
        .catch((e)=>alert(e.message));
};
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </NavLink>
      <div className="login__formlogin">
      <h1>Sign-in</h1>
      <form > 
        <h5>Email</h5>
        <input value={email} onChange={event =>setEmail(event.target.value)} type="email" />
        <h5>Password</h5> 
        <input  value={password} onChange={event => setPassword(event.target.value)} type="password" />   
        <button onClick={login} type="submit" className="login__signInbutton">Sign In</button>
          <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
          </p>
          <button onClick={register} className="login__registerButton">Crate your Amazon Acount</button>
      
      </form>
        
      </div>
    </div>
  );
}

export default Login;
