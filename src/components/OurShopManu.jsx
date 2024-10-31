import ChefCard from "../cards/ChefCard";
import chifManu from '../assets/cardimage/card.png';
import AddToCart from "../button/AddToCart";

function OurShopManu() {
  return (
    <div>
      {/* nav button of this page */}
      <div className="flex gap-4 lg:gap-10 text-xl justify-center items-center py-7">
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          SALAD
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          PIZZA
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          SOUPS
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          DESSERT
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          DRINKS
        </button>
      </div>
      {/* start the card section here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-10 px-20">
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
        <ChefCard
          img={chifManu}
          name={'Caeser Salad'}
          desc={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
          button={<AddToCart />}
        />
      </div>
    </div>
  );
}

export default OurShopManu
