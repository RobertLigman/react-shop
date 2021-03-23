import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
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
    setErr("");
    if (details.password.split("").length < 6)
      return setErr("password must contains at least 6 characters");

    setDetails({ ...details, isLogged: true });
    props.UserRegistration({ ...details, isLogged: true });
    setErr("");

    props.history.push("/");
    localStorage.setItem(
      "loginSession",
      JSON.stringify({ ...details, isLogged: true })
    );

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
            <div className="checkbox-wrapper">
              <input type="checkbox" name="signUp" id="signUp" />
              <label htmlFor="signUp" className="checkmark"></label>
              <label htmlFor="signUp">
                Sign Up for exlusive updates, discounts, new arrivals,contests,
                and more
              </label>
            </div>
            <div className="submit-container">
              <button
                type="submit"
                onClick={checkPasswords}
                className="submit__button">
                Create account
              </button>
              <p className="privacy-policy">
                By Clicking 'Create Account', you agree to our
                <Link to="/policy" className="submit__link">
                  {" "}
                  Privacy Policy
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
              </p>
            </div>
          </>
        ) : (
          <div className="submit-container submit">
            <button type="submit" className="submit__button">
              Sign in
            </button>
            <Link to="/restorePassword" className="submit__link">
              Forgot your Password{" "}
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
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
