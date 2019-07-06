import React, { useReducer, useEffect } from "react";
import axios from "axios";

import "./AddContact.scss";


export default function AddContact({ userId, addContact }) {

  const InitState = {
    first_name: "",
    last_name: "",
    phone: "",
    venue: "",
    address: "",
    email: "",
    note: ""
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  useEffect(() => {
    if (userId) setState({ created_by: userId })
  }, [userId])

  const handleInputChange = e => {
    const keyVal = e.target.name;
    const inputVal = e.target.value;
    setState({ [keyVal]: inputVal });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(State)
  };

  return (
    <div id="add-new-contact">
      <form onSubmit={e => handleSubmit(e)}>
        <h3>Add Contact</h3>
        <div className="formGroup">
          <label>First Name:</label>
          <input
            placeholder="Sherlock"
            name="first_name"
            type="text"
            onChange={e => handleInputChange(e)}
            value={State.first_name}
          />
        </div>
        <div className="formGroup">
          <label>Last Name:</label>
          <input
            placeholder="Holmes"
            name="last_name"
            type="text"
            onChange={e => handleInputChange(e)}
            value={State.last_name}
          />
        </div>
        <div className="formGroup">
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            placeholder="###-###-####"
            onChange={e => handleInputChange(e)}
            value={State.phone}
          />
        </div>
        <div className="formGroup">
          <label>Venue:</label>
          <input
            name="venue"
            type="text"
            placeholder="the showdown club"
            onChange={e => handleInputChange(e)}
            value={State.venue}
          />
        </div>
        <div className="formGroup">
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="21 Baker Street"
            onChange={e => handleInputChange(e)}
            value={State.address}
          />
        </div>
        <div className="formGroup">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="email@email.com"
            onChange={e => handleInputChange(e)}
            value={State.email}
          />
        </div>
        <div className="formGroup">
          <label>Notes:</label>
          <input
            name="note"
            type="text"
            placeholder="add a note"
            onChange={e => handleInputChange(e)}
            value={State.note}
          />
        </div>
        <div className="formAction">
          <button className="btn-submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

};
