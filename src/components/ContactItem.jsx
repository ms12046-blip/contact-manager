import "../styles/contact-item.css";

function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-item__info">
        <strong>{contact.name}</strong>
        <span>{contact.phone}</span>
        <span>{contact.email}</span>
      </div>
      <button
        className="contact-item__delete"
        onClick={() => onDelete(contact.id)}>удалить</button>
    </li>
  );
}

export default ContactItem;