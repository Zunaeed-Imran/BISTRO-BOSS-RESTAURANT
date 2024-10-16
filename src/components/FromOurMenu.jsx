import manubg from "../assets/pageimage/bgBlurManu.png";

function FromOurMenu() {
  return (
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${manubg})`}}>
      <div>
        <p>---Check it out---</p>
        <h1>FROM OUR MENU</h1>
      </div>
    </div>
  );
}

export default FromOurMenu
