import { MdOutlinePhoneInTalk } from "react-icons/md";


function Phone() {
  return (
    <div className="flex flex-col border-[#F3F3F3] border-2">
      <div className="bg-[#D1A054] flex justify-center items-center text-center py-5">
        <MdOutlinePhoneInTalk className="text-white" size="2rem" />
      </div>
      <div className="bg-[#F3F3F3] p-10 mx-5 mb-5">
        <h1 className="font-bold py-3">PHONE</h1>
        <p className="py-2">01804468806</p>
        <p>018044688**</p>
      </div>
    </div>
  );
}

export default Phone
