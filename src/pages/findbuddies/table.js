
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./table.css";
import data from "./mock-data.json";
import ReadOnlyRow from "././Components/ReadOnlyRow";
import EditableRow from "././Components/EditableRow";
import pic from '../../assets/logo1.png';

const Table = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    timings: "",
    stores: "",
    intrests:"",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    timings: "",
    stores: "",
    intrests:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      timings: addFormData.timings,
      stores: addFormData.stores,
      intrests: addFormData.intrests,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      timings: editFormData.timings,
      stores: editFormData.stores,
      intrests: editFormData.intrests,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      timings: contact.timings,
      stores: contact.stores,
      intrests: contact.intrests,
    };

    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  

  return (
    <div className="app-container">
    <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><div className='search'>
                  <input type="text" placeholder="Search.."/>
                </div></li>
            </ul>
        </nav>
        <div className="add">
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="timings"
          required="required"
          placeholder="Enter your timings..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="stores"
          required="required"
          placeholder="Enter intrested store..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="intrests"
          required="required"
          placeholder="Enter your intrest..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>timings</th>
              <th>stores</th>
              <th>Intrests</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>

        </table>
      </form>
      
    </div>
  );
};

export default Table;