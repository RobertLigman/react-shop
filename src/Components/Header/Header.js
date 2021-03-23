import {
  faChevronDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
const Header = (props) => {
  const toggleShop = () => {
    console.log("Shopping Cart here");
  };
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list__item">
          <div className="currency-select">
            Currency: {props.currency} <FontAwesomeIcon icon={faChevronDown} />
            <div className="currency-options">
              {props.currencyOptions.map((el) => (
                <button
                  key={el}
                  val={el}
                  onClick={() => {
                    console.log(el);
                    props.handleCurrencyChange(el);
                  }}>
                  {el}
                </button>
              ))}
            </div>
          </div>
        </li>
        {props.loginDetails.isLogged ? (
          <>
            <li className="header-list__item">
              Logged as: {props.loginDetails.email}
            </li>
            <li className="header-list__item" onClick={props.logOut}>
              Log Out
            </li>
          </>
        ) : (
          <>
            <li className="header-list__item">
              <Link className="link " to="/Register">
                Register
              </Link>
            </li>
            <li className="header-list__item">
              <Link className="link " to="/login">
                Sign In
              </Link>
            </li>
          </>
        )}

        <ShoppingCart clicked={toggleShop} />
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    currencyOptions: state.currencyOptions,
    loginDetails: state.loginDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleCurrencyChange: (currencyName) =>
      dispatch({ type: "CHANGE_CURRENCY", currencyName }),
    logOut: () => dispatch({ type: "LOG_OUT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
