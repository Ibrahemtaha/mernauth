import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signing() {
  const [values, setValues] = useState({
    email: "bremoo87@hotmail.com",
    password: "rrrdddd",
    buttonText: "Submit",
  });

  //Destructuring
  const { email, password, buttonText } = values;
  // console.log(event.target.value);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        // Save the response (user,token) localstorage\cookie
        setValues({
          ...values,
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(`Hey ${response.data.user.name}, Welcome back!`);
      })
      .catch((error) => {
        console.log("SIGNIN ERROR", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form action="">
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
      <h1 className="text-center py-4">Signin</h1>
      {signinForm()}
    </div>
  );
}
