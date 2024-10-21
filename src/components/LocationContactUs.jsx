import Phone from "../smallcomponents/Phone";


function LocationContactUs() {
  return (
    <div>
      <div className="py-12">
        <p className="italic font-semibold text-[#D99904]">---Visit Us---</p>
        <h1 className="text-4xl py-3">OUR LOCATION</h1>
      </div>
      <div className="grid grid-cols-3">
        <Phone/>
      </div>
    </div>
  );
}

export default LocationContactUs
