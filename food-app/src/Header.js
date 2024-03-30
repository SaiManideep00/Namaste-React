const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://previews.123rf.com/images/jianghaistudio/jianghaistudio1701/jianghaistudio170100033/69541517-food-logo-made-from-the-flag-of-india.jpg"
            alt="Food"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
