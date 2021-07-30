import { useState } from "react";
import "./contact.scss";

export default function Contact({theme, lang}) {
  var en = {
    "Contact": "Contact",
    "Email": "Email",
    "Message": "Message",
    "Send": "Send",
    "thank": "Thank you!"
  }
  var fr = {
    "Contact": "Contact",
    "Email": "E-mail",
    "Message": "Message",
    "Send": "Envoyer",
    "thank": "Merci!"
  }
  var la = {}
  switch(lang){
    case "EN":
      la = en;
      break;
    case "FR":
      la = fr
      break;
    default:
      la = en;
      break;
  }
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
          <input type="text" placeholder={la["Email"]} />
          <textarea placeholder={la["Message"]}></textarea>
          <button type="submit">{la["Send"]}</button>
          {message && <span>{la["thank"]}</span>}
        </form>
      </div>
    </div>
  );
}
