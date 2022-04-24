import React, { useState } from "react";
import SignUp from "./SignUp";
import FormSuccess from "./FormSuccess";
import "./SignUp.css";
import { Container } from "@material-ui/core";
import Home from "../../Pages/Home/Home";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <div>
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </div>
  );
};

export default Form;
