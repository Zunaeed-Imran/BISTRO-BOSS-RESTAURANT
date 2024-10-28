import AboutUs from "../smallcomponents/AboutUs";
import ContactUs from "../smallcomponents/ContactUs";
import FollowUs from "../smallcomponents/FollowUs";


function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-[#111827] text-white pb-7 text-left px-20">
        <AboutUs/>
        <ContactUs />  
        <FollowUs />
      </div>
      <div className="bg-[#151515] text-white p-3">
        <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer
