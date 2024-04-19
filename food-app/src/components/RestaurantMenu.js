import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const { resId } = useParams(); // destructuring on the fly

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
        (res) => res.info.id === resId
      )
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>welcome to {restaurantInfo[0]?.info?.name}</h1>
      <h2>The cuisines are {restaurantInfo[0]?.info?.cuisines.join(",")}</h2>
      <h3>The cost for two people : {restaurantInfo[0]?.info?.costForTwo}</h3>
    </div>
  );
};
export default RestaurantMenu;
