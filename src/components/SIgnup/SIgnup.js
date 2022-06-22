import React from "react";
import "./SIgnup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SIgnup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [error, setError] = useState("");

  const handelEmailBlr = (event) => {
    setEmail(event.target.value);
  };

  const handelpasswardBlr = (event) => {
    setPassward(event.target.value);
  };

  const handelconfPasswardlBlr = (event) => {
    setconfPassword(event.target.value);
  };

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/shop");
  }

  const handelCreateUser = (event) => {
    event.preventDefault();
    if (passward !== confPassword) {
      setError("Your passward Didnt Matched");
      return;
    }
    if (passward.length < 6) {
      setError("Password Must be 6 Chare");
      return;
    }
    createUserWithEmailAndPassword(email, passward);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2 className="from-tittle">Sign Up</h2>
        <form onSubmit={handelCreateUser}>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Conform Password</label>
            <input
              onBlur={handelconfPasswardlBlr}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Signup" />
        </form>
        <p>
          Already Have Account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SIgnup;
