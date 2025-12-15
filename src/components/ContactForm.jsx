import { useState } from "react";
import "../styles/contact-form.css";

function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      name,
      phone,
      email
    });

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="contact-form__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="имя"
        required
      />

      <input
        className="contact-form__input"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="телефон"
        required
      />

      <input
        className="contact-form__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="имейл"
        required
      />


      <button className="contact-form__button">добавить</button>
    </form>
  );
}

export default ContactForm;