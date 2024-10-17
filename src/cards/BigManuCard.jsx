import PropTypes from 'prop-types';


function BigManuCard({name, desc}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default BigManuCard

BigManuCard.propTypes = {
  name: PropTypes.text,
  desc: PropTypes.text,
};