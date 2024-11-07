import AboutUs from "../smallcomponents/AboutUs";
import ContactUs from "../smallcomponents/ContactUs";
import FollowUs from "../smallcomponents/FollowUs";


function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-center items-start md:grid-cols-3 w-full bg-[#111827] text-white pb-7 text-left px-20 pt-14 gap-10 md:gap-0">
        <AboutUs />
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
