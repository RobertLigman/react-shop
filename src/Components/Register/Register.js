import React, { useState } from "react";
import { Link } from "react-router-dom";
function Register(props) {
  const [submit, setSubmit] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(false);
    // props.register(submit);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Register Section</h1>
      <Link to="/" type="submit">
        Register
      </Link>
    </form>
  );
}

export default Register;
