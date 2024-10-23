import BigManu from "../assets/cardimage/manucard2.png";

function OrderOnlineBigCard() {
  return (
    <div
      className="relative w-full bg-cover bg-center h-[500px] flex items-center justify-center rounded-md top-0"
      style={{ backgroundImage: `url(${BigManu})` }}
    >
      <div className="absolute bg-slate-50 flex flex-col justify-center items-center   w-4/5 h-3/6">
        <h1 className="font-cinzel text-4xl">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto <br /> ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
}

export default OrderOnlineBigCard
