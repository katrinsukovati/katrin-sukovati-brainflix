import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={brainFlixLogo} alt="BrainFlix Logo" />
      <div className="header__options">
        <input className="header__search" type="text" placeholder="Search" />
        <button className="header__upload-button">UPLOAD</button>
        <div className="header__user"></div>
      </div>
    </div>
  );
}

export default Header;
