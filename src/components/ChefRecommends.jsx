import ChefCard from "../cards/ChefCard";
import chifManu from "../assets/cardimage/card.png";
import AddToCart from "../button/AddToCart";

function ChefRecommends() {
  return (
    <div className="py-14">
      <div>
        <p className="italic text-[#D99904] text-xl">---Should Try---</p>
        <h1 className="text-4xl py-7">CHEF RECOMMENDS</h1>
      </div>
      <div>
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart/>}
        />
      </div>
    </div>
  );
}

export default ChefRecommends
