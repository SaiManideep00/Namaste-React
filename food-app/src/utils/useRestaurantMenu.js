import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
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
  return restaurantInfo;
};
export default useRestaurantMenu;
