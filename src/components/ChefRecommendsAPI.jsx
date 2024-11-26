import { useEffect, useState } from "react"
import axios from 'axios';


function ChefRecommendsAPI() {

  const [ourShop, setOurShop] = useState([]);
  const getMenu = async () => {
    const response = await axios.get('/OurSHop.json');
    setOurShop(response.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <div>
        <p className="italic text-[#D99904] text-xl pb-3">---Should Try---</p>
        <h1 className="text-4xl pb-7">CHEF RECOMMENDS</h1>
      </div>
      {ourShop
        ?.filter(item => ['salad'].includes(item.categories))
        .map(item => (
          <div key={item.categories}>
            <img src={item.img} alt="Order Menu" />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
    </div>
  );
}

export default ChefRecommendsAPI
