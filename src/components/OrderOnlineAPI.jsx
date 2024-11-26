import { useEffect, useState } from "react"
import axios from 'axios';

function OrderOnlineAPI() {

  const [ourShop, setOurShop] = useState([]);
  console.log(ourShop);
  const getMenu = async () => {
    const response = await axios.get('/OurSHop.json');
    console.log(response.data);
    setOurShop(response.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

return (
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-20 px-20">
    {ourShop
      ?.filter(item => ['6', '7', '8', '9'].includes(item.id))
      .map(item => (
        <div
          className="link hover:scale-105 hover:opacity-50 hover:transition-opacity"
          key={item.id}
        >
          <img src={item.img} alt="Order Menu" />
        </div>
      ))}
  </div>
);

}

export default OrderOnlineAPI
