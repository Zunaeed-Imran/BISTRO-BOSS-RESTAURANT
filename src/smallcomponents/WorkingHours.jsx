import { MdAccessTimeFilled } from "react-icons/md";


function WorkingHours() {
  return (
    <div>
      <div className="flex flex-col border-[#F3F3F3] border-2">
        <div className="bg-[#D1A054] flex justify-center items-center text-center py-5">
          <MdAccessTimeFilled className="text-white" size="2rem" />
        </div>
        <div className="bg-[#F3F3F3] p-10 mx-5 mb-5">
          <h1 className="font-bold py-3">WORKING HOURS</h1>
          <p className="py-2">Mon - Fri: 08:00 - 22:00</p>
          <p className="">Sat - Sun: 10:00 - 23:00</p>
        </div>
      </div>
    </div>
  );
}

export default WorkingHours
