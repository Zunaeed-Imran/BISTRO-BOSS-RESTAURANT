import ContactForm from "../components/ContactForm"
import HeroContactUs from "../components/HeroContactUs"
import LocationContactUs from "../components/LocationContactUs"


function ContactUsPage() {
  return (
    <div>
      <HeroContactUs />
      <LocationContactUs />
      <ContactForm/>
    </div>
  )
}

export default ContactUsPage
