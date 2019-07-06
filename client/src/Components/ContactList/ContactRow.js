import React from "react";

export default function ContactRow({
  name,
  phone,
  venue,
  address,
  email,
  note,
  handleClickRemove
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{venue}</td>
      <td>{address}</td>
      <td>{email}</td>
      <td>{note}</td>
    </tr>

  );
}