import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Auth.css";
function Auth(props) {
  const [details, setDetails] = useState({
    isLogged: props.isLogged,
    email: "",
    password: "",
  });
  const [confPassword, setConfPassword] = useState("");
  const [err, setErr] = useState("");
  const submitHandler = (e) => {
    setErr("");
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
    <div className="Auth-outer">
      <form onSubmit={submitHandler} className="Auth-form">
        <h2 className="auth-form__title">{props.authType}</h2>
        {err !== "" && <div>{err}</div>}
        <div className="input-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            className="input-element"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your Email.."
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="input-group">
          {/* <label htmlFor="password">Password:</label> */}
          <input
            className="input-element"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Your password.."
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        {props.authType === "Register" ? (
          <>
            <div className="input-group">
              {/* <label htmlFor="confPassword">Confirm Password:</label> */}
              <input
                className="input-element"
                type="password"
                name="confPassword"
                id="confPassword"
                required
                placeholder="Confirm password.."
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
            <div className="submit-container">
              <button
                type="submit"
                onClick={checkPasswords}
                className="submit-button">
                Create account
              </button>
              <p className="privacy-policy">
                By Clicking 'Create Account', you agree to our
                <Link to="/policy">Privacy Policy</Link>
              </p>
            </div>
          </>
        ) : (
          <div className="submit-container">
            <button type="submit" className="submit-button">
              Sign in
            </button>
            <Link to="restorePassword">Forgot Password faArrow</Link>
          </div>
        )}
      </form>
    </div>
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
