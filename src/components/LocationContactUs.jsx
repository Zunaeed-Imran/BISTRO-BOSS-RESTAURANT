import Address from "../smallcomponents/Address";
import Phone from "../smallcomponents/Phone";
import WorkingHours from "../smallcomponents/WorkingHours";


function LocationContactUs() {
  return (
    <div>
      <div className="pt-10">
        <p className="italic text-xl text-[#D99904] pb-3">---Visit Us---</p>
        <h1 className="text-4xl pb-10">OUR LOCATION</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-20">
        <Phone />
        <Address />
        <WorkingHours/>
      </div>
    </div>
  );
}

export default LocationContactUs
