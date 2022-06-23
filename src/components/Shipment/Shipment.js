import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const email = user.email;

  const handelNameBlr = (event) => {
    setName(event.target.value);
  };

  const handelPhoneBlr = (event) => {
    setPhoneNo(event.target.value);
  };

  const handelAddressBlr = (event) => {
    setAddress(event.target.value);
  };

  const handelCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, phone, address };
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <div className="form">
        <h2 className="from-tittle">Shipping Info</h2>
        <form onSubmit={handelCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handelNameBlr}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your email</label>
            <input
              value={user?.email}
              readOnly
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Your Phone No</label>
            <input
              onBlur={handelPhoneBlr}
              type="number"
              name="phone"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Your Address</label>
            <input
              onBlur={handelAddressBlr}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
