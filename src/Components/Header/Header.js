import {
  faChevronDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
const Header = () => {
  const toggleShop = () => {
    console.log("Shopping Cart here");
  };
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list__item">
          Currency: GBP <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li className="header-list__item">Register</li>
        <li className="header-list__item">Sign In</li>
        <li className="header-list__item cart" onClick={toggleShop}>
          <FontAwesomeIcon icon={faShoppingCart} /> empty{" "}
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
      </ul>
    </header>
  );
};
export default Header;
