import React from "react";
import {
  femaleHiddenList,
  femaleHiddenListFormal,
  maleHiddenListFormal,
  maleHiddenList,
} from "./HiddenListAssets";
import { Link } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import "./HiddenList.css";

export default function HiddenList(props) {
  const hiddenList =
    props.gender === "male" ? maleHiddenList : femaleHiddenList;
  const hiddenListFormal =
    props.gender === "male" ? maleHiddenListFormal : femaleHiddenListFormal;

  return (
    <div className="sublist-container">
      <ul className="hidden-list">
        <p className="hidden-list__description">Casuals</p>
        {hiddenList.map((el) => (
          <ListItem key={el.name} classNames="hidden-list__item">
            <Link
              to={`/${props.gender}/${el.link}`}
              className="hidden-list__item__link">
              {el.name}
            </Link>
          </ListItem>
        ))}
      </ul>
      <ul className="hidden-list">
        <p className="hidden-list__description">Formal</p>
        {hiddenListFormal.map((el) => (
          <ListItem key={el.name} classNames="hidden-list__item">
            <Link
              to={`/${props.gender}/${el.link}`}
              className="hidden-list__item__link">
              {el.name}
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
