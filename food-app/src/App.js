import "./App.css";
//import Home from "./components/Home";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
function App() {
  return (
    <RouterProvider router={appRouter}>
      <Header />
      <Body />
    </RouterProvider>
  );
}

export default App;
