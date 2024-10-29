import PropTypes from 'prop-types';

function ReviewCard({logo, img, desc, name}) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center pt-7'>
      <img src={img} alt="Logo Image" />
      <div className="flex">
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
        <p className="text-[#CD9003] text-3xl">{logo}</p>
      </div>
      <p className='leading-relaxed md:px-52 px-10'>{desc}</p>
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