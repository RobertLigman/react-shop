import React from "react";
import { Link } from "react-router-dom";
import "./UsefullLinks.css";
const information = [
  {
    name: "The Brand",
    link: "brand",
  },
  {
    name: "Local Stores",
    link: "localstores",
  },
  {
    name: "Customer service",
    link: "customerservice",
  },
  {
    name: "Privacy & cookies",
    link: "privacy&coockies",
  },
  {
    name: "Site Map",
    link: "sitemap",
  },
];
function UsefullLinks() {
  return (
    <div className="UsefullLinks">
      <div className="UsefullLinks-grid">
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">information</p>
          {information.map((el) => (
            <li className="UsefullLinks__item">
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">information</p>
          {information.map((el) => (
            <li className="UsefullLinks__item">
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">information</p>
          {information.map((el) => (
            <li className="UsefullLinks__item">
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">information</p>
          {information.map((el) => (
            <li className="UsefullLinks__item">
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="UsefullLinks__list">
          <p className="UsefullLinks__subtitle">information</p>
          {information.map((el) => (
            <li className="UsefullLinks__item">
              <Link to={`/${el.link}`} className="UsefullLinks__link">
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="banner-section">
          <div className="banner banner--dark">
            <h2>Award winner</h2>
            <h2>Fashion awards 2016</h2>
          </div>
          <div className="banner banner--light">
            <h2>Award winner</h2>
            <h2>Fashion awards 2016</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsefullLinks;
