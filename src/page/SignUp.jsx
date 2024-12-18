import { Link } from "react-router-dom";
import LoginLogo from "../smallcomponents/LoginLogo";
import signupimg from "../assets/pageimage/signUp.png";
import PageTitle from "../services/PageTitle";


function SignUp() {
  return (
    <div>
      <PageTitle title={'SignUp'} />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#F1F2F4]">
        <div className="md:pt-40 md:pb-20 md:pl-20 items-center justify-center">
          <div className="md:border-2 border-[#D0D0D0] rounded-md md:p-10 md:px-20">
            <form action="" className="flex flex-col gap-4 px-4">
              <h1 className="text-3xl font-bold py-7">Sign Up</h1>
              <label htmlFor="" className="font-semibold m-1 text-left">
                Name
              </label>
              <input
                type="text"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
              <label htmlFor="" className="font-semibold m-1 text-left">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
              <label htmlFor="" className="font-semibold m-1 text-left">
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
              />
              <Link to="/ok" className="btn bg-[#D9B782] text-white">
                Sign Up
              </Link>
            </form>
            <p className="py-3">
              Already registered? Go to log in
              <Link className="link ml-2" to="/login">
                Log-in
              </Link>
            </p>
            <LoginLogo />
          </div>
        </div>
        {/* image portion fo this page */}
        <div className="md:pt-32 items-center md:px-20 flex justify-end">
          <img src={signupimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUp
