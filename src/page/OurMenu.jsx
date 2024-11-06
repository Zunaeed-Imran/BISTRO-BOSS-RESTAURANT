import AllSmallManu from "../components/AllSmallManu"
import MoreOfferFood from "../components/MoreOfferFood"
import OurMenuHero from "../components/OurMenuHero"
import SaladSection from "../components/SaladSection"
import TodayOffer from "../components/TodayOffer"
import PageTitle from "../services/PageTitle"


function OurMenu() {
  return (
    <div>
      <PageTitle title={'OurMenu'}/>
      <OurMenuHero />
      <TodayOffer />
      <MoreOfferFood />
      <SaladSection/>
      <AllSmallManu/>
    </div>
  )
}

export default OurMenu
