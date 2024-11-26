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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-16 pb-8">
        {ourShop
          ?.filter(item => ['salad'].includes(item.categories))
          .map(item => (
            <div key={item.categories}>
              <div className=" bg-[#F3F3F3] m-4 pb-7">
                <img
                  className="link hover:opacity-50 hover:scale-105"
                  src={item.img}
                  alt="Order Menu"
                />
                <h2 className="text-2xl font-bold  py-2 p-5">{item.name}</h2>
                <p className="py-3  p-5">{item.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChefRecommendsAPI
