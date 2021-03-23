import React from "react";
import Auth from "../Auth/Auth";

function Login(props) {
  return <Auth authType="sign in" history={props.history} />;
}

export default Login;
