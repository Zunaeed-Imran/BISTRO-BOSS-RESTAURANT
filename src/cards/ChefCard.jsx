import PropTytpes from 'prop-types';

function ChefCard({img, name, desc, button}) {
  return (
    <div>
      <img src={img} alt="manuimg" />
      <h2>{name}</h2>
      <p>{desc}</p>
      {button}
    </div>
  )
}

export default ChefCard


ChefCard.propTypes = {
  img: PropTytpes.string,
  name: PropTytpes.text,
  desc: PropTytpes.text,
  button: PropTytpes.string,
};