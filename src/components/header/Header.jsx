import "./Header.scss";
import { Link } from "react-router-dom";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src={brainFlixLogo}
          alt="BrainFlix Logo"
        />
      </Link>

      <div className="header__options">
        <input className="header__search" type="text" placeholder="Search" />
        <Link to={"/upload"} className="header__upload-button">
          Upload
        </Link>

        <div className="header__user"></div>
      </div>
    </div>
  );
}

export default Header;
