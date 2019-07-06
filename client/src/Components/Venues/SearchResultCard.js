import React from "react";

const SearchResultCard = ({ venue, addVenue, deleteVenue }) => {
    if (venue._id) {
        return (
            <li className="searchResult">
                <h3>{venue.name}</h3>
                <p>
                    {venue.street}, {venue.city}, {venue.state} {venue.zip}
                </p>
                <p>{venue.phone}</p>
                <a href="{venue.website}" target="_blank">
                    {venue.website}
                </a>
                <button onClick={() => deleteVenue(venue._id)}>Remove</button>
            </li>
        );
    } else {
        return (
            <li className="searchResult">
                <h3>{venue.displayName}</h3>
                <p>
                    {venue.street}, {venue.city.displayName},{" "}
                    {venue.city.state.displayName} {venue.zip}
                </p>
                <p>{venue.phone}</p>
                <a href="{venue.website}" target="_blank">
                    {venue.website}
                </a>
                <button onClick={() => addVenue(venue)}>Add</button>
            </li>
        );
    }
};

export default SearchResultCard;
