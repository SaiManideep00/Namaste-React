import Header from "./Header";
//import Body from "./Body";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
