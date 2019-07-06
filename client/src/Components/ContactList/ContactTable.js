import React from "react";
import ContactRow from "./ContactRow";

const ContactTable = ({ contacts }) => {
    return (
        <table id="contacts">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Venue</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <ContactRow
                        key={contact._id}
                        name={contact.first_name + " " + contact.last_name}
                        phone={contact.phone}
                        venue={contact.venue}
                        address={contact.address}
                        email={contact.email}
                        note={contact.note}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default ContactTable;