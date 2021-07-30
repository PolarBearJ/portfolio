import { useState } from "react";
import "./contact.scss";

export default function Contact({theme}) {
  const [message, setMessage] = useState(false);
  const light = theme === "light" ? true : false;
  const shake = theme === "light" ? "assets/shake.svg" : "assets/shake_dark.png";
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className={light ? 'contact-light' : 'contact-dark'} id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you!</span>}
        </form>
      </div>
    </div>
  );
}
