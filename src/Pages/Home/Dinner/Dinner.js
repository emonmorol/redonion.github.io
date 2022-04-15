import FoodCard from "../FoodCard/FoodCard";
// import dinner from "../../../../public/dinner.json";

const Dinner = () => {
  //   const [dinners, setDinners] = useState([]);
  const dinners = [
    {
      id: "1",
      image: "https://i.ibb.co/ns0ZG5g/dinner1.png",
      title: "French Fries WIth Cheese",
      description: "How We Dream About Our Future",
      price: "21",
    },
    {
      id: "2",
      image: "https://i.ibb.co/8461jJ2/dinner2.png",
      title: "French Fries WIth Cheese",
      description: "How We Dream About Our Future",
      price: "21",
    },
    {
      id: "3",
      image: "https://i.ibb.co/HK3JJPb/dinner3.png",
      title: "French Fries WIth Cheese",
      description: "How We Dream About Our Future",
      price: "21",
    },
    {
      id: "4",
      image: "https://i.ibb.co/jTSh1K7/dinner4.png",
      title: "French Fries WIth Cheese",
      description: "How We Dream About Our Future",
      price: "21",
    },
    {
      id: "5",
      image: "https://i.ibb.co/Ns4zYZx/dinner5.png",
      title: "French Fries WIth Cheese",
      description: "How We Dream About Our Future",
      price: "21",
    },
    {
      id: "6",
      image: "https://i.ibb.co/K6H6Bgb/dinner6.png",
      title: "French Fries WIth Cheese",
      description: "How We Dream About Our Future",
      price: "21",
    },
  ];
  return (
    <div className="grid grid-cols-3 mx-auto mt-20">
      {dinners.map((dinner) => (
        <FoodCard key={dinner.id} food={dinner} />
      ))}
    </div>
  );
};

export default Dinner;
