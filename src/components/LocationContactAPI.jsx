import { useEffect, useState } from "react";
import axios from 'axios';

function LocationContactAPI() {

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
      <div className="pt-10">
        <p className="italic text-xl text-[#D99904] pb-3">---Visit Us---</p>
        <h1 className="text-4xl pb-10">OUR LOCATION</h1>
      </div>
      <div>
        {ourShop
          ?.filter(item => ['12'].includes(item.id))
          .map(item => (
            <div key={item.id}>
              { }
            </div>
          ))}
      </div>
    </div>
  );
}

export default LocationContactAPI
