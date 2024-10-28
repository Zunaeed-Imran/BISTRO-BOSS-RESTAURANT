import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function FollowUs() {
  return (
    <div className="">
      <div className="pt-10">
        <h1 className="text-2xl pb-5">Follow US</h1>
        <p>Join us on social media</p>
      </div>
      <div className="flex gap-3 text-3xl pt-4">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
}

export default FollowUs
