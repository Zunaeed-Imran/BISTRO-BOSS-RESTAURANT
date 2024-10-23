import OrderOnlineBigCard from "../cards/OrderOnlineBigCard";
import OrderOnlineCard from "../cards/OrderOnlineCard";


function OrderOnline() {
  return (
    <div className="justify items-center">
      <div>
        <p className="text-[#D99904] italic pb-3">---Form 11:00am to 10:00pm---</p>
        <h1 className="text-4xl">ORDER ONLINE</h1>
      </div>
      <div className="justify items-center py-8">
        <OrderOnlineCard/>
      </div>
      <div className="pb-10">
        <OrderOnlineBigCard/>
      </div>
    </div>
  );
}

export default OrderOnline
