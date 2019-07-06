import React from "react";

function CalendarHeader({ headers }) {
  return (
    <div className="calendarHeader">
      {headers.map(day => (
        <div key={day} className="weekDays">
          {day}
        </div>
      ))}
    </div>
  );
}

export default CalendarHeader;
