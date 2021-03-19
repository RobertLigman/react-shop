import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ListItem(props) {
  return (
    <li className={props.classNames}>
      {props.text}
      {props.faIcon && <FontAwesomeIcon icon={props.faIcon} />}
      {props.children}
    </li>
  );
}
