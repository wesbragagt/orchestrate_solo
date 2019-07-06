import React from "react";
import EventsContainer from '../Components/Events/EventsContainer'

function Events({ match }) {
  return (
    <EventsContainer match={match} dashboard={false} />
  );
}

export default Events;
