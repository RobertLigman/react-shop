import "./Header.css";
const Header = () => (
  <header className="header">
    <ul className="header-list">
      <li className="header-list__item">Currency: GBP faArrow</li>
      <li className="header-list__item">Register</li>
      <li className="header-list__item">Sign In</li>
      <li className="header-list__item cart">Cart empty faArrow</li>
    </ul>
  </header>
);
export default Header;
