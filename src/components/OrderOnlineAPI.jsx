import { useEffect, useState } from "react"
import axios from 'axios';

function OrderOnlineAPI() {

  const [ourShop, setOurShop] = useState([]);

  const getMenu = async () => {
    const response = await axios.get('/OurSHop.json');
    setOurShop(response.data.setOurShop);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      {ourShop.map(ourSho => {
        return (
          <article key={ourSho.id}>
            <img src={ourSho.image} alt={`${ourSho.name}'s image`} />
          </article>
        );
      })}
    </div>
  );
}

export default OrderOnlineAPI
