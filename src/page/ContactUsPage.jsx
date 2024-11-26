import ContactForm from "../components/ContactForm"
import HeroContactUs from "../components/HeroContactUs"
import LocationContactAPI from "../components/LocationContactAPI"
// import LocationContactUs from "../components/LocationContactUs"
import PageTitle from "../services/PageTitle"


function ContactUsPage() {
  return (
    <div>
      <PageTitle title={'ContactUs'}/>
      <HeroContactUs />
      {/* <LocationContactUs /> */}
      <LocationContactAPI/>
      <ContactForm/>
    </div>
  )
}

export default ContactUsPage
