import {
  faChevronDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
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

        <ShoppingCart clicked={toggleShop} />
      </ul>
    </header>
  );
};
export default Header;
