import PropTytpes from 'prop-types';

function ChefCard({img, name, desc, button}) {
  return (
    <div className="flex flex-col bg-[#F3F3F3] m-3 pb-7">
      <img src={img} alt="manuimg" className='hover:opacity-50'/>
      <h2 className="text-2xl font-bold  py-2 p-5">{name}</h2>
      <p className="py-3  p-5">{desc}</p>
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