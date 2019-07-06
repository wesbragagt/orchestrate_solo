import React from "react";

const TodoItem = ({ values, markCompleted, deleteCompleted }) => (
  <li className="toDoItem">
    <button onClick={() => markCompleted(values._id)}>
      {values.isCompleted ? (
        <i className="far fa-check-circle" />
      ) : (
        <i className="far fa-circle" />
      )}
    </button>
    <span>{values.value}</span>
    <button className="delete" onClick={() => deleteCompleted(values._id)}>
      <i className="fas fa-times" />
    </button>
  </li>
);

export default TodoItem;
