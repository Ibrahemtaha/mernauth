import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Activate({ match }) {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
    //show: "rrrdddd",
  });

  useEffect(() => {
    console.log("change");
    let token = match.params.token;
    let { name } = jwt.decode(token);
    console.log(token);
    //
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);
  //Destructuring
  const { name, token, show } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        setValues({
          ...values,
          show: false,
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("Account activation ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };
  const ActivationLink = () => {
    return (
      <div className="text-center">
        <h1 className="text-center py-4">
          Hey {name} Ready to Activate Account
        </h1>
        <button className="btn btn-outline-primary" onClick={clickSubmit}>
          Activate Account
        </button>
      </div>
    );
  };
  return (
    <div>
      <Nav />
      <div className="container col-md-6 col-offset-3">
        <ToastContainer />
        {/* {JSON.stringify({ name, email, password })} */}

        {ActivationLink()}
      </div>
    </div>
  );
}
