import DessertSection from "./DessertSection"
import DrinkSection from "./DrinkSection"
import PizzaSection from "./PizzaSection"
import SaladSection from "./SaladSection"
import SoupSection from "./SoupSection"


function AllMenuSection() {
  return (
    <div className="pb-10">
      <SaladSection/>
      <PizzaSection />
      <SoupSection />
      <DessertSection />
      <DrinkSection/>
    </div>
  )
}

export default AllMenuSection
