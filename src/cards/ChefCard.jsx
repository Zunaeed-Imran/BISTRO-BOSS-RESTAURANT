import PropTytpes from 'prop-types';

function ChefCard({img, name, desc, button}) {
  return (
    <div className="flex flex-col bg-[#F3F3F3] m-3 pb-3">
      <img src={img} alt="manuimg" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>{desc}</p>
      {button}
    </div>
  );
}

export default ChefCard


ChefCard.propTypes = {
  img: PropTytpes.string,
  name: PropTytpes.text,
  desc: PropTytpes.text,
  button: PropTytpes.string,
};