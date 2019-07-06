import React from "react";

function DaySlot({ classToUse, data, children, addEvent }) {
  return (
    <div className={classToUse} onClick={() => addEvent(data)}>
      <span className="dayNumber">{data.day}</span>
      {children}
    </div>
  );
}

export default DaySlot;
