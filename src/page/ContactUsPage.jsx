import ContactForm from "../components/ContactForm"
import HeroContactUs from "../components/HeroContactUs"
import LocationContactUs from "../components/LocationContactUs"
import PageTitle from "../services/PageTitle"


function ContactUsPage() {
  return (
    <div>
      <PageTitle title={'ContactUs'}/>
      <HeroContactUs />
      <LocationContactUs />
      <ContactForm/>
    </div>
  )
}

export default ContactUsPage
