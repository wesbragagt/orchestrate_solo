import React from "react";
import TodoList from "../Components/TodoList/TodoList";
import EventsContainer from '../Components/Events/EventsContainer'
import ArtistsContainer from '../Components/Artists/ArtistsContainer'

function Home({match}) {
  return (
    <div className="dashboardPage">
      <div className="topFeature">
        <h4>This Weeks Events</h4>
        <EventsContainer match={match} dashboard={true} />
      </div>
      <div className="lowerFeatures">
        <div className="lowerLeft">
          <h4>Your Artists</h4>
          <ArtistsContainer dashboard={true} />
        </div>
        <div className="lowerRight">
          <h4>Reminders</h4>
          <TodoList dashboard={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;
