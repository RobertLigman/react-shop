import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import "./BackToMainPage.css";
function BackToMainPage() {
  return (
    <Link to="/" className="Return-link">
      <FontAwesomeIcon icon={faLongArrowAltLeft} /> Return to main page
    </Link>
  );
}

export default BackToMainPage;
