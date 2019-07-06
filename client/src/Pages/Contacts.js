import React, { useContext, useReducer, useEffect } from 'react';
import ContactList from "../Components/ContactList/ContactList";
import { Page } from "../Components/Containers";
import Modal from "../Components/Modal/Modal";
import AddContact from "../Components/ContactList/AddContact";
import useAPI from "../Utils/useAPI";
import axios from "axios";

import { AppContext } from "../App";

function Contacts() {
  const { userId } = useContext(AppContext);

  const InitState = {
    modalOpen: false,
    contacts: []
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  const getContacts = useAPI("get", `/api/people?created_by=${userId}`);

  useEffect(() => {
    if (getContacts) setState({ contacts: getContacts });
  }, [getContacts]);

  const toggleModal = () => {
    setState({ modalOpen: !State.modalOpen });
  };

  const addContact = contact => {
    axios.post("/api/people", contact)
      .then(res => {
        const newContacts = [...State.contacts, res.data]
        setState({ contacts: newContacts, modalOpen: false})
      })
      .catch(err => console.log(err))
  };

  const deleteContact = id => {
    axios.delete(`/api/people/${id}`)
      .then(res => {
        const UpdatedContacts = State.contacts.filter(contact => contact._id !== id);
        setState({ contacts: UpdatedContacts });
      })
      .catch(err => console.log("error!"));
  };


  return (
    <Page>
      <div className="pageHeader">
        <h1>Contacts</h1>
        <button className="addItem" onClick={() => toggleModal()}>
          <i className="fas fa-plus" />Add a contact
      </button>
      </div>
      <ContactList contacts={State.contacts} deleteContact={deleteContact} />
      {State.modalOpen && (
        <Modal closeModal={toggleModal} returnLink="contacts">
          <AddContact userId={userId} addContact={addContact} />
        </Modal>
      )}
    </Page>
  )
}

export default Contacts