const User = (props) => {
  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Name is {name}</h1>
      <h2>Location is {location}</h2>
    </div>
  );
};
export default User;
