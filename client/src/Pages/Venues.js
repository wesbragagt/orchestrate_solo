import React, { useContext, useReducer, useEffect } from "react";
import { Page } from "../Components/Containers";
import SearchVenue from "../Components/Venues/SearchVenue";
import "../Styles/Venues.scss";
import { AppContext } from "../App";
import Venue from "../Components/Venues/VenueList";
import useAPI from "../Utils/useAPI";
import axios from "axios";
import Modal from "../Components/Modal/Modal";

function Venues() {
  const { userId } = useContext(AppContext);

  const InitState = {
    venues: [],
    modalOpen: false
  };
  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };
  const [State, setState] = useReducer(reducer, InitState);

  const getVenues = useAPI("get", `/api/venue?created_by=${userId}`);

  useEffect(() => {
    if (getVenues) setState({ venues: getVenues });
  }, [getVenues]);

  const toggleModal = () => {
    setState({ modalOpen: !State.modalOpen });
  };

  const addVenue = venue => {
    const newVenue = {
      name: venue.displayName,
      phone: venue.phone,
      website: venue.website,
      street: venue.street,
      city: venue.city.displayName,
      state: venue.city.state.displayName,
      zip_code: venue.zip,
      country: venue.city.country.displayName,
      capacity: venue.capacity,
      created_by: userId
    };

    axios
      .post(`/api/venue/`, newVenue)
      .then(res => {
        setState({ venues: [...State.venues, res.data] });
      })
      .catch(err => console.log(err));
  };

  const deleteVenue = id => {
    const UpdatedVenues = State.venues.filter(venue => venue._id !== id)
    
    axios
      .delete(`/api/venue/${id}`)
      .then(res => {
        setState({venues: UpdatedVenues})
      })
      .catch(err => console.log(err));
  };

  return (
    <Page>
      <div className="pageHeader">
        <h1>Venues</h1>
        <button className="addItem" onClick={() => toggleModal()}>
          <i className="fas fa-plus" /> Add Venue(s)
        </button>
      </div>
      <ul className="venueList">
        {State.venues.map((venue, idx) => (
          <Venue key={idx} venue={venue} deleteVenue={deleteVenue} />
        ))}
      </ul>
      {State.modalOpen && (
        <Modal closeModal={toggleModal} returnLink="venues">
          <SearchVenue
            addVenue={addVenue}
            existingVenues={State.venues}
            deleteVenue={deleteVenue}
          />
        </Modal>
      )}
    </Page>
  );
}

export default Venues;
