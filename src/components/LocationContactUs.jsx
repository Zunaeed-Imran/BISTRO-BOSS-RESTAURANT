import Address from "../smallcomponents/Address";
import Phone from "../smallcomponents/Phone";
import WorkingHours from "../smallcomponents/WorkingHours";


function LocationContactUs() {
  return (
    <div>
      <div className="py-7">
        <p className="italic text-xl text-[#D99904]">---Visit Us---</p>
        <h1 className="text-4xl py-3">OUR LOCATION</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-4 px-10 lg:px-32">
        <Phone />
        <Address />
        <WorkingHours/>
      </div>
    </div>
  );
}

export default LocationContactUs
