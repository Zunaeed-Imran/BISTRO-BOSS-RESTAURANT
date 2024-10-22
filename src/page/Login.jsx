import { Link } from "react-router-dom";
import loginimg from "../assets/pageimage/login.png";

function Login() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#F1F2F4]">
        <div className="pt-32 items-center">
          <img src={loginimg} alt="" />
        </div>
        <div className="pt-32 items-center justify-center">
          <div className="md:border-2 border-[#D0D0D0] rounded-md md:p-10 md:px-20">
            <form action="" className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold py-7">Login</h1>
              <label htmlFor="" className="font-semibold m-1 text-left">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
              <label htmlFor="" className="font-semibold m-1 text-left">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
              />
              <Link to="/ok" className="btn bg-[#D9B782] text-white">
                Login
              </Link>
            </form>
            <div className="py-5">
              <p>Or Sign In with</p>
            </div>
            <p>
              Dont have account?
              <Link className="link" to="/signup">
                Sign-Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
