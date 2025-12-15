import ContactItem from "./ContactItem";
import "../styles/contact-list.css";

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className="contact-list__empty">список контактов пуст</p>;
  }

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;