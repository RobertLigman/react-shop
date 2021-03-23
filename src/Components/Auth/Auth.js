import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Auth(props) {
  const [details, setDetails] = useState({
    isLogged: props.isLogged,
    email: "",
    password: "",
  });
  const [confPassword, setConfPassword] = useState("");
  const [err, setErr] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (err !== "") return;
    if (details.password.split("").length < 6) {
      setErr("password must contains at least 6 characters");
    } else {
      setDetails({ ...details, isLogged: true });
      props.UserRegistration({ ...details, isLogged: true });
      setErr("");

      props.history.push("/");
    }

    // setSubmit(false);
    // props.register(submit);
  };
  const checkPasswords = () => {
    setErr("");
    if (details.password !== confPassword) {
      setErr("Password do not match!");
    }
  };
  return (
    <form onSubmit={submitHandler} className="Auth-form">
      <h2 className="auth-form__title">{props.AuthType}</h2>
      {err !== "" && <div>{err}</div>}
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
      {props.authType === "Register" ? (
        <>
          <div className="input-group">
            <label htmlFor="confPassword">Confirm Password:</label>
            <input
              type="password"
              name="confPassword"
              id="confPassword"
              required
              onChange={(e) => setConfPassword(e.target.value)}
              value={confPassword}
            />
          </div>
          <div>
            <input type="checkbox" name="singUp" id="signUp" />
            <label htmlFor="signUp">
              Sign Up for exlusive updates, discounts, new arrivals,contests,
              and more
            </label>
          </div>
          <div className="create-acc">
            <button type="submit" onClick={checkPasswords}>
              Create account
            </button>
            <p className="privacy-policy">
              By Clicking 'Create Account', you agree to our
              <Link to="/policy">Privacy Policy</Link>
            </p>
          </div>
        </>
      ) : (
        <div>
          <button type="submit">Sign in</button>
          <Link to="restorePassword">Forgot Password faArrow</Link>
        </div>
      )}
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    isLogged: state.loginDetails.isLogged,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    UserRegistration: (details) =>
      dispatch({ type: "SET_LOGIN_DETAILS", details }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
