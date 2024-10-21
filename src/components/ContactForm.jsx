import SendMessage from "../button/SendMessage";


function ContactForm() {
  return (
    <div>
      <div>
        <p className="italic font-semibold text-[#D99904]">
          ---Send Us a Message---
        </p>
        <h1 className="text-4xl py-3">CONTACT FORM</h1>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-left">
          Name*
        </label>
        <input type="text" className="" placeholder="Enter your name" />
        <label htmlFor="" className="text-left">
          Email
        </label>
        <input type="text" className="" placeholder="Enter your email" />
        <label htmlFor="" className="text-left">
          Message
        </label>
        <input type="text" className="" placeholder="Write your message here" />
        <label htmlFor="" className="text-left">
          Phone
        </label>
        <input
          type="number"
          className=""
          placeholder="Enter your phone number"
        />
        <SendMessage/>
      </div>
    </div>
  );
}

export default ContactForm
