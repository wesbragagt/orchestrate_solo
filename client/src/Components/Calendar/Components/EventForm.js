import React, { useReducer, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../App";

function EventForm({addEvent}) {
  const { userId } = useContext(AppContext);
  const InitForm = {
    title: "",
    start_date: "",
    end_date: "",
    description: "",
    artists: [],
    event_type: "",
    created_by: userId
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitForm);

  const HandleChange = e => {
    const keyVal = e.target.name;
    const inputVal = e.target.value;
    setState({ [keyVal]: inputVal });
  };

  const SubmitForm = e => {
    e.preventDefault();
    if (State.title && State.start_date) {
      axios
        .post("/api/event", State)
        .then(res => addEvent(res.data));
    } else {
      alert("Title and date must be provided.");
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={e => SubmitForm(e)}>
        <div className="formGroup">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={State.title}
            onChange={e => HandleChange(e)}
          />
        </div>

        <div className="formGroup">
          <label>Date</label>
          <input
            type="datetime-local"
            name="start_date"
            value={State.start_date}
            onChange={e => HandleChange(e)}
          />
        </div>

        <div className="formGroup">
          <label>Description</label>
          <textarea
            name="description"
            value={State.description}
            onChange={e => HandleChange(e)}
          />
        </div>

        <div className="formAction">
          <button className="btn-submit" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
