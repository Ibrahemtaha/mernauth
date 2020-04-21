import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";
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
    console.log(token);
  }, []);
  //Destructuring
  const { name, token, show } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signup`,
      data: { token },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setValues({
          ...values,
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
