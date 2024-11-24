import OrderOnlineBigCard from "../cards/OrderOnlineBigCard";
import OrderOnlineAPI from "./OrderOnlineAPI";
// import OrderOnlineCard from "../cards/OrderOnlineCard";


function OrderOnline() {
  return (
    <div className="justify items-center">
      <div>
        <p className="text-[#D99904] italic pb-3">---Form 11:00am to 10:00pm---</p>
        <h1 className="text-4xl pb-10">ORDER ONLINE</h1>
      </div>
      <div className="justify items-center pb-12 md:px-20">
        {/* <OrderOnlineCard/> */}
        <OrderOnlineAPI/>
      </div>
      <div className=" md:px-20">
        <OrderOnlineBigCard/>
      </div>
    </div>
  );
}

export default OrderOnline
