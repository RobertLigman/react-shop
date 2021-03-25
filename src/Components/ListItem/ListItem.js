import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ListItem.module.css";
export default function ListItem(props) {
  return (
    <li className={`${styles.ListItem} ${props.classNames}`}>
      {props.text}
      {props.faIcon && <FontAwesomeIcon icon={props.faIcon} />}
      {props.children}
    </li>
  );
}
