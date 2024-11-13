import salad from "../assets/cardimage/salads.png";
import pizza from "../assets/cardimage/pizza.png";
import soup from "../assets/cardimage/soup.png";
import dissert from "../assets/cardimage/dessert.png";

function OrderOnlineCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-20 px-20">
      <div className="link hover:scale-105 hover:opacity-50 hover:transition-opacity">
        <img src={salad} alt="salad" />
      </div>
      <div className="link hover:scale-105 hover:opacity-50 hover:transition-opacity">
        <img src={pizza} alt="pizza" />
      </div>
      <div className="link hover:scale-105 hover:opacity-50 hover:transition-opacity">
        <img src={soup} alt="soup" />
      </div>
      <div className="link hover:scale-105 hover:opacity-50 hover:transition-opacity">
        <img src={dissert} alt="desserts" />
      </div>
    </div>
  );
}

export default OrderOnlineCard
