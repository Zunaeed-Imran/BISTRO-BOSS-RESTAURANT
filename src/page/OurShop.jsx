import HeroOurShop from "../components/HeroOurShop"
import OurShopTabs from "../components/OurShopTabs";
// import OurShopManu from "../components/OurShopManu"
import PageTitle from "../services/PageTitle"

function OurShop() {
  return (
    <div>
      <PageTitle title={'OurShop'} />
      <HeroOurShop />
      {/* <OurShopManu /> */}
      <OurShopTabs/>
    </div>
  );
};

export default OurShop
