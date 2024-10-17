import ContactUs from "../smallcomponents/ContactUs";
import FollowUs from "../smallcomponents/FollowUs";


function Footer() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-[#1F2937] text-white">
          <ContactUs />
        </div>
        <div className="bg-[#111827] text-white">
          <FollowUs />
        </div>
      </div>
      <div className="bg-[#151515] text-white p-3">
        <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer
