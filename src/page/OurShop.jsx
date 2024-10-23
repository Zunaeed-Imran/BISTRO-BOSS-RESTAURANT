import HeroOurShop from "../components/HeroOurShop"
import OurShopManu from "../components/OurShopManu"
import PageTitle from "../services/PageTitle"


function OurShop() {
  return (
    <div>
      <PageTitle title={'OurShop'} />
      <HeroOurShop />
      <OurShopManu />
    </div>
  );
};

export default OurShop
