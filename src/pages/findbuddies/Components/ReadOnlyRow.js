import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.timings}</td>
      <td>{contact.stores}</td>
      <td>{contact.intrests}</td>
    </tr>
  );
};

export default ReadOnlyRow;