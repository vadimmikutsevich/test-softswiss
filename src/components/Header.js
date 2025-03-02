import { useState } from "react";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as CartIcon } from "../assets/icons/cart.svg";

const menuItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Products",
    link: "#",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrapper">
        <Logo className="header__logo" />

        <nav
          className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}
        >
          <ul className="header__menu-list">
            {menuItems.map((item) => (
              <li className="header__menu-item" key={item.label}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#" className="header__menu-cart">
            <CartIcon />
          </a>
        </nav>

        <button
          className={`header__burger ${
            isMenuOpen ? "header__burger--active" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
