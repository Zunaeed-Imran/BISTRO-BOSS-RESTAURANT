import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function FollowUs() {
  return (
    <div className="flex flex-col justify-start items-start sm:pl-20 md:pl-48">
      <div className="justify-start items-start text-left">
        <h1 className="text-2xl pb-5">Follow US</h1>
        <p>Join us on social media</p>
      </div>
      <div className="flex gap-3 text-3xl pt-4 justify-center items-center">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
}

export default FollowUs
