import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [values, setValues] = useState({
    name: "Ibrahem",
    email: "bremoo87@hotmail.com",
    password: "rrrdddd",
    buttonText: "Submit",
  });

  //Destructuring
  const { name, email, password, buttonText } = values;
  // console.log(event.target.value);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <form action="">
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      <div>
        <button onClick={clickSubmit} className="btn btn-primary btn-block">
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <div className="container col-md-6 col-offset-3">
      <ToastContainer />
      {/* {JSON.stringify({ name, email, password })} */}
      <h1 className="text-center py-4">Register</h1>
      {signupForm()}
    </div>
  );
}
