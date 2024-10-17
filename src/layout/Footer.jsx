import ContactUs from "../smallcomponents/ContactUs";
import FollowUs from "../smallcomponents/FollowUs";


function Footer() {
  return (
    <div>
      <div>
        <div>
          <ContactUs/>
        </div>
        <div>
          <FollowUs/>
        </div>
      </div>
      <div className="bg-[#151515] text-white p-3">
        <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer
