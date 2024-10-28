import { FaLocationDot } from "react-icons/fa6";


function Address() {
  return (
    <div>
      <div className="flex flex-col border-[#F3F3F3] border-2">
        <div className="bg-[#D1A054] flex justify-center items-center text-center py-5">
          <FaLocationDot className="text-white" size="2rem" />
        </div>
        <div className="bg-[#F3F3F3] p-10 mx-5 mb-5">
          <h1 className="font-bold py-3">ADDRESS</h1>
          <p className="py-2">
            Level 10, Technology Park,
          </p>
          <p>Jashore - 7400, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}

export default Address
