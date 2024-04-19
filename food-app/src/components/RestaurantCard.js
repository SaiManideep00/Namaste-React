import { IMAGE_URL } from "../utils/images";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMAGE_URL + resData.info.cloudinaryImageId}
        alt="name"
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.sla.slaString}</h5>
    </div>
  );
};
export default RestaurantCard;
