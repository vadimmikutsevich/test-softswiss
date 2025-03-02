import { ReactComponent as RocketIcon } from "../assets/icons/rocket.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <RocketIcon className="footer__rocket" />
        <p>Exciting space adventure!</p>
      </div>
    </footer>
  );
};

export default Footer;
