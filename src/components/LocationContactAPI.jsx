import { useEffect, useState } from "react";
import axios from 'axios';
import { MdAccessTimeFilled, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-20">
        {ourShop
          ?.filter(item => ['12'].includes(item.id))
          .map(item => (
            <div key={item.id}>
              <div className="flex flex-col border-[#F3F3F3] border-2">
                <div className="bg-[#D1A054] flex justify-center items-center text-center py-5">
                  <MdOutlinePhoneInTalk className="text-white" size="2rem" />
                </div>
                <div className="bg-[#F3F3F3] p-10 mx-5 mb-5">
                  <h1 className="font-bold py-3">PHONE</h1>
                  <p>{item.phone}</p>
                  <p>{item.phone2}</p>
                </div>
              </div>
              <div className="flex flex-col border-[#F3F3F3] border-2">
                <div className="bg-[#D1A054] flex justify-center items-center text-center py-5">
                  <FaLocationDot className="text-white" size="2rem" />
                </div>
                <div className="bg-[#F3F3F3] p-10 mx-5 mb-5">
                  <h1 className="font-bold py-3">ADDRESS</h1>
                  <p>{item.address}</p>
                  <p>{item.address2}</p>
                </div>
              </div>
              <div className="flex flex-col border-[#F3F3F3] border-2">
                <div className="bg-[#D1A054] flex justify-center items-center text-center py-5">
                  <MdAccessTimeFilled className="text-white" size="2rem" />
                </div>
                <div className="bg-[#F3F3F3] p-10 mx-5 mb-5">
                  <h1 className="font-bold py-3">WORKING HOURS</h1>
                  <p>{item.workingHours}</p>
                  <p>{item.workingHours2}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LocationContactAPI
