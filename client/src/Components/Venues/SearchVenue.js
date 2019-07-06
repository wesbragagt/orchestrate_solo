import React, { useState, useCallback } from "react";
import axios from "axios";
import SearchResultCard from "./SearchResultCard";

export default function SearchVenue({ addVenue, existingVenues, deleteVenue }) {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");

  const sendRequest = useCallback(async query => {
    await axios
      .get(
        `https://api.songkick.com/api/3.0/search/venues.json?query=${query}&page=1&apikey=avCCBGwqkhYMC132&per_page=10`
      )
      .then(res => {
        setResponse(res.data.resultsPage.results.venue);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const { searchInput } = e.target;
    const letters = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

    if (searchInput.value.match(letters)) {
      sendRequest(searchInput.value);
      setSearch("");
      return;
    } else {
      alert("Please insert only letters");
      setSearch("");
    }
  };
  return (
    <div className="venueSearchWrapper">
      <h3>Search for Venues</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          name="searchInput"
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      <ul className="searchResults">
        {response.map((venue, index) => {
          const existing = existingVenues.find(ven => ven.street === venue.street);
          const data = (existing) ? existing : venue
          
          return (
            <SearchResultCard
            key={index}
            venue={data}
            addVenue={addVenue}
            deleteVenue={deleteVenue}
          />
          )
        })}
         
      </ul>
    </div>
  );
}
