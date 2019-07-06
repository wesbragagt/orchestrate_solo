import React from "react";

const Venue = ({ venue, deleteVenue }) => (
  <li className="venueListItem">
    <div className="venueIcon">
      <i className="fas fa-building" />
    </div>
    <div className="venueContent">
      <h3>{venue.name}</h3>
      <p>
        {venue.street}, {venue.city}, {venue.state}, {venue.country}
      </p>
      <p>{venue.phone}</p>
      <p>
        <a target="_blank" rel="noopener noreferrer" href={venue.website}>
          {venue.website}
        </a>
      </p>
      <button onClick={() => deleteVenue(venue._id)}>Delete</button>
    </div>
  </li>
);

export default Venue;
