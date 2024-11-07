import logo from "../assets/logo/BISTRO BOSS.png";

function AboutUs() {
  return (
    <div className="flex flex-col gap-2 justify-start items-start ">
      <div className="">
        <img src={logo} alt="logo" className="pb-3" />
        <p className="leading-relaxed md:pr-7">
          Discover the joy of delicious, chef-crafted meals and , delivered
          fresh to your doorstep. At BISTROBOSS we believe in bringing the
          finest flavors and freshest ingredients straight to you.
        </p>
      </div>
    </div>
  );
}

export default AboutUs
