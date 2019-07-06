import React from "react";

// import AddContact from "./AddContact";
import ContactTable from "./ContactTable";
import "./ContactList.scss";


function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      {/* Reading from state */}
      <ContactTable contacts={contacts} />
    </div>
  );
}

export default ContactList;
