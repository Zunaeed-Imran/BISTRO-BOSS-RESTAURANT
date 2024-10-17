import PropTypes from 'prop-types';

function ReviewCard({logo, img, desc, name}) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-32'>
      <div className="flex">
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
      </div>
      <img src={img} alt="Logo Image" />
      <p className='leading-relaxed'>{desc}</p>
      <h1 className="text-[#CD9003] text-2xl">{name}</h1>
    </div>
  );
}

export default ReviewCard

ReviewCard.propTypes = {
  logo: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.text,
  name: PropTypes.text,
};