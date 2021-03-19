import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <main className="hero">
      <h1 className="main-title">AVE</h1>
      <header className="hero__header">
        <ul className="hero__header__list list">
          <li className="list__item">
            <p className="text-logo">
              <strong>Avenue</strong> fashion
            </p>
          </li>
          <li className="list__item">
            Mens <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li className="list__item">
            Womens <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li className="list__item">The Brand</li>
          <li className="list__item">
            local stores <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li className="list__item">
            look book <FontAwesomeIcon icon={faChevronDown} />
          </li>

          <li className="list__item">
            <input type="text" placeholder="search" />
            <FontAwesomeIcon icon={faSearch} />
          </li>
        </ul>
        <Link to="" className="hero__button">
          shop men's collection
        </Link>
      </header>
    </main>
  );
}
