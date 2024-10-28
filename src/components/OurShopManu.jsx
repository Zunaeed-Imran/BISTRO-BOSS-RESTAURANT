import ChefCard from "../cards/ChefCard";
import chifManu from '../assets/cardimage/card.png';
import AddToCart from "../button/AddToCart";

function OurShopManu() {
  return (
    <div>
      <div className="flex gap-2 text-xl justify-center items-center pt-20">
        <p className="hover:text-[#D99904] hover:underline decoration-double ">
          SALAD
        </p>
        <p className="hover:text-[#D99904] hover:underline decoration-double">
          PIZZA
        </p>
        <p className="hover:text-[#D99904] hover:underline decoration-double">
          SOUPS
        </p>
        <p className="hover:text-[#D99904] hover:underline decoration-double">
          DESSERT
        </p>
        <p className="hover:text-[#D99904] hover:underline decoration-double">
          DRINKS
        </p>
      </div>
      {/* start the card section here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-20 px-20">
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
