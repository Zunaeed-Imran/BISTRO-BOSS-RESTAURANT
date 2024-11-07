import HeroOurShop from "../components/HeroOurShop"
import OurShopManu from "../components/OurShopManu"
import PageTitle from "../services/PageTitle"
import AllMenuSection from "../smallcomponents/AllMenuSection";


function OurShop() {
  return (
    <div>
      <PageTitle title={'OurShop'} />
      <HeroOurShop />
      <OurShopManu />
      <AllMenuSection/>
    </div>
  );
};

export default OurShop
