import { Link } from "react-router-dom";
import loginimg from "../assets/pageimage/login.png";
import LoginLogo from "../smallcomponents/LoginLogo";
import PageTitle from "../services/PageTitle";

function Login() {
  return (
    <div>
      <PageTitle title={'Login'}/>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#F1F2F4]">
        <div className="pt-32 items-center">
          <img src={loginimg} alt="" />
        </div>
        <div className="pt-32 items-center justify-center">
          <div className="md:border-2 border-[#D0D0D0] rounded-md md:p-10 md:px-20">
            <form action="" className="flex flex-col gap-4 px-6">
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
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
              />
              <label
                htmlFor=""
                className="font-semibold m-1 text-left text-[#5D5FEF]"
              >
                <input
                  type="text"
                  placeholder="U A g l u o "
                  className="input input-bordered w-full"
                />
                Reload Captcha
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <Link to="/ok" className="btn bg-[#D9B782] text-white">
                Sign in
              </Link>
            </form>
            <p className="py-3">
              New here? Create a New Account
              <Link className="link" to="/signup">
                Sign-Up
              </Link>
            </p>
            <LoginLogo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
