import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./UsefullLinks.css";
import {
  information,
  lookbook,
  yourAccount,
  whyBuy,
  contactDetails,
} from "./UsefullLinksAssets";
function UsefullLinks() {
  return (
    <div className="UsefullLinks">
      <div className="UsefullLinks-grid">
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">information</p>
          {information.map((el) => (
            <li className="UsefullLinks__item" key={el.name}>
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">why buy from us</p>
          {whyBuy.map((el) => (
            <li className="UsefullLinks__item" key={el.name}>
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">your Account</p>
          {yourAccount.map((el) => (
            <li className="UsefullLinks__item" key={el.name}>
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">lookbook</p>
          {lookbook.map((el) => (
            <li className="UsefullLinks__item" key={el.name}>
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">contact Details</p>
          {contactDetails.map((el) => (
            <li className="UsefullLinks__item" key={el.name}>
              <p className="UsefullLinks__text">{el.name}</p>
            </li>
          ))}
        </ul>
        <div className="banner-section">
          <div className="banner banner--dark">
            <h2 className="banner__title">Award winner</h2>
            <h2 className="banner__subtitle">Fashion awards 2016</h2>
          </div>
          <div className="banner banner--light grid-layout">
            <a href="https://facebook.com" className="banner__link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="banner__link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="banner__link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://pinterest.com" className="banner__link">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsefullLinks;
