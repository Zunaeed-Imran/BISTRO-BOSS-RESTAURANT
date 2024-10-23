import PropTypes from 'prop-types';
import bigManu from "../assets/cardimage/horizontalcard.png";

function BigManuCard({name, desc}) {
  return (
    <div
      className="bg-cover bg-center relative h-[400px] justify-center items-center top-0"
      style={{ backgroundImage: `url(${bigManu})` }}
    >
      <div className="bg-black bg-opacity-65 absolute flex flex-col justify-center items-center inset-0 m-auto w-4/5 h-3/5 md:h-2/4 p-10">
        <h1 className="text-3xl font-cinzel font-semibold text-white py-3">
          {name}
        </h1>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
}

export default BigManuCard

BigManuCard.propTypes = {
  name: PropTypes.text,
  desc: PropTypes.text,
};