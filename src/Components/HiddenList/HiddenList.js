import React from "react";
import { hiddenList, hiddenListFormal } from "./HiddenListAssets";
import { Link } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
export default function HiddenList(props) {
  return (
    <div className="hidden-list">
      <ul>
        Casuals
        {hiddenList.map((el) => (
          <ListItem key={el.name}>
            <Link to={`/${props.gender}/${el.link}`}>{el.name}</Link>
          </ListItem>
        ))}
      </ul>
      <ul>
        Formal
        {hiddenListFormal.map((el) => (
          <ListItem key={el.name}>
            <Link to={`/${props.gender}/${el.link}`}>{el.name}</Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
