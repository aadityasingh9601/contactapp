import "./Contact.css";

export default function Contact({ contact }) {
  return (
    <div className="contact">
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
      <div>{contact.message}</div>
    </div>
  );
}
