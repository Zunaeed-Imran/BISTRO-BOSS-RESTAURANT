import AddToCart from '../button/AddToCart';
import chifManu from '../assets/cardimage/dessertAll.png';
import ChefCard from '../cards/ChefCard';

function DessertSection() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-16">
        <ChefCard
          img={chifManu}
          name={'Dessert'}
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

export default DessertSection;
