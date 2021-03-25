import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import "./Hero.css";
import ListItem from "../ListItem/ListItem";
import HiddenList from "../HiddenList/HiddenList";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
export default function Hero() {
  return (
    <>
      <main className="hero">
        <h1 className="main-title">AVE</h1>
        <nav className="hero__header">
          <ul className="hero__header__list list">
            <li className="list__item">
              <p className="text-logo">
                <strong>Avenue</strong> fashion
              </p>
            </li>
            <ListItem
              text="Mens"
              faIcon={faChevronDown}
              classNames="list__item">
              <HiddenList gender="male" />
            </ListItem>
            <ListItem
              text="Womens"
              faIcon={faChevronDown}
              classNames="list__item">
              <HiddenList gender="female" />
            </ListItem>
            <ListItem classNames="list__item">The Brand</ListItem>
            <ListItem classNames="list__item">
              local stores <FontAwesomeIcon icon={faChevronDown} />
            </ListItem>
            <ListItem classNames="list__item">
              look book <FontAwesomeIcon icon={faChevronDown} />
            </ListItem>

            <li className="list__item">
              <div className="search-container">
                <input type="text" placeholder="search" className="input" />
                <FontAwesomeIcon icon={faSearch} className="inputIcon" />
              </div>
            </li>
          </ul>
        </nav>
        <Link to="" className="hero__button">
          shop men's collection
        </Link>
      </main>
      <HorizontalLine />
    </>
  );
}
