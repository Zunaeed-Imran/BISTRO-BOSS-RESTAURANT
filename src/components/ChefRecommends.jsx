import ChefCard from "../cards/ChefCard";


function ChefRecommends() {
  return (
    <div className="py-14">
      <div>
        <p className="italic text-[#D99904] text-xl">---Should Try---</p>
        <h1 className="text-4xl py-7">CHEF RECOMMENDS</h1>
      </div>
      <div>
        <ChefCard
          img={''}
          name={''}
          desc={''}
          button={''} />
      </div>
    </div>
  );
}

export default ChefRecommends
