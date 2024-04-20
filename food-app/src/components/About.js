//import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  const info = {
    name: "Sai Manideep",
    location: "Arlington",
  };
  return (
    <div>
      <h1>This is about us page</h1>
      {/* <User {...info} /> */}
      <UserClass {...info} />
    </div>
  );
};
export default About;
