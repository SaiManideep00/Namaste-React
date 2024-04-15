import { LOGO_URL } from "./utils/images";
import { useState } from "react";
const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Food"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              onClick={() => {
                setLoginText(loginText === "Login" ? "Logout" : "Login");
              }}
            >
              {loginText}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
