import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSucces";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      <div>{!isSubmitted ? "" : <FormSuccess />}</div>
      <div>
        <FormSignup submitForm={submitForm} />
      </div>
    </div>
  );
};

export default Form;
