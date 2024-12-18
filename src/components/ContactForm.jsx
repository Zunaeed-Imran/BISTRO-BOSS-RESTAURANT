import SendMessage from "../button/SendMessage";


function ContactForm() {
  return (
    <div>
      <div className="pt-10">
        <p className="italic font-semibold text-[#D99904] pb-3">
          ---Send Us a Message---
        </p>
        <h1 className="text-4xl pb-10">CONTACT FORM</h1>
      </div>
      <div className="flex flex-col bg-[#F3F3F3] mx-20 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7 p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-left">
              Name*
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-left">
              Email*
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="py-5 justify-center p-8 flex flex-col gap-2">
          <label htmlFor="" className="text-left">
            Message*
          </label>
          <textarea
            type="longtext"
            className="textarea textarea-bordered w-full h-40"
            placeholder="Write your message here"
          />
          <label htmlFor="" className="text-left">
            Phone*
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Enter your phone number"
          />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default ContactForm
