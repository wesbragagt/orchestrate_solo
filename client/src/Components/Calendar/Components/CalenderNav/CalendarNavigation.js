import React from "react";

import "./CalendarNav.scss";

function CalendarNavigation({ month, year, updateMonth, setView }) {
  return (
    <div className="calendarNavigation">
      <div className="calendarNavButtons">
        <button className="firstButton" onClick={() => updateMonth("dec")}>
          <i className="fas fa-angle-left" />
        </button>
        <button onClick={() => updateMonth("cur")}>
          <i className="far fa-circle" />
        </button>
        <button className="lastButton" onClick={() => updateMonth("inc")}>
          <i className="fas fa-angle-right" />
        </button>
      </div>
      <h2>
        {month} {year}
      </h2>
      {/*<div className="calendarViews">
        <button className="firstButton" onClick={() => setView("month")}>Month</button>
        <button onClick={() => setView("week")}>Week</button>
        <button className="lastButton" onClick={() => setView("day")}>Day</button>
  </div>*/}
    </div>
  );
}

export default CalendarNavigation;
