import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams(); // destructuring on the fly
  const restaurantInfo = useRestaurantMenu(resId);
  const name = restaurantInfo[0]?.info?.name;
  const cuisines = restaurantInfo[0]?.info?.cuisines;
  const costForTwo = restaurantInfo[0]?.info?.costForTwo;
  return (
    <div>
      <h1>welcome to {name}</h1>
      <h2>The cuisines are {cuisines?.join(",")}</h2>
      <h3>The cost for two people : {costForTwo}</h3>
    </div>
  );
};
export default RestaurantMenu;
