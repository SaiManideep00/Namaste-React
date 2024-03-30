import React from "react";
import ReactDOM from "react-dom";

const HeadingComponent = () => {
  return <h1>Welcome</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//const element = React.createElement("h1", {}, "welcome");
root.render(<HeadingComponent />);
console.log(React.version);
