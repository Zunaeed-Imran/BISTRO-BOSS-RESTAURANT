import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";


function LoginLogo() {
  return (
    <div>
      <div>
        <p>Or sign in with</p>
        <CiFacebook />
        <FaGoogle />
        <FaGithub />
      </div>
    </div>
  );
}

export default LoginLogo
