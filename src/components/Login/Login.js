import React from "react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");

  const handelEmailBlr = (event) => {
    setEmail(event.target.value);
  };

  const handelpasswardBlr = (event) => {
    setPassward(event.target.value);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handeluserSignin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, passward);
  };

  if (user) {
    navigate("/shop");
  }

  return (
    <div className="form-container">
      <div className="form">
        <h2 className="from-tittle">Login</h2>
        <form onSubmit={handeluserSignin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handelEmailBlr}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handelpasswardBlr}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loadding..............</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-Jho?{" "}
          <Link className="link" to="/signup">
            Create New Account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
