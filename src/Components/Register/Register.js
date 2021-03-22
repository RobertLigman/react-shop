import React, { useState } from "react";
import { Link, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
function Register(props) {
  const [details, setDetails] = useState({
    isLogged: false,
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.password.split("").length < 6) {
      setErr("za słabe hasło");
    } else {
      setDetails({ ...details, isLogged: true });
      setErr("");
      props.UserRegistration(details);
      props.history.push("/");
    }

    // setSubmit(false);
    // props.register(submit);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Register Section</h1>
      {err !== "" && <div>{err}</div>}
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          name="name"
          id="name"
          required
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    UserRegistration: (details) =>
      dispatch({ type: "SET_LOGIN_DETAILS", details }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
