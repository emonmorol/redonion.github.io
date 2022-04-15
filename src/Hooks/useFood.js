import { useEffect, useState } from "react";

const useFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [foods]);
  return [foods, setFoods];
};

export default useFood;
