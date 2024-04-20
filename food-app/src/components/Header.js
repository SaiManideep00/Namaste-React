import { LOGO_URL } from "../utils/images";
import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Food"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/grocery">Grocery </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
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
