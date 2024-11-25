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
    <div>
      {ourShop?.map(item =>
        <div key={item.id}>
          <img src={item.img} alt="" />
      </div>)}
    </div>
  );
}

export default OrderOnlineAPI
