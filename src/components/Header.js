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
  return (
    <header className="header">
      <div className="wrapper">
        <Logo className="header__logo" />

        <nav className="header__menu">
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
      </div>
    </header>
  );
};

export default Header;
