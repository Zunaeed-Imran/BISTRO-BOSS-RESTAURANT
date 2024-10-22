import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";


function LoginLogo() {
  return (
    <div className="pt-3">
      <p className="py-1">Or sign in with</p>
      <div className="flex justify-center gap-3">
        <CiFacebook size={'2rem'} />
        <FaGoogle size={'2rem'} />
        <FaGithub size={'2rem'} />
      </div>
    </div>
  );
}

export default LoginLogo
