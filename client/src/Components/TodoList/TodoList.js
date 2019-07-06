import "./Todos.scss";
import React, { useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import { AppContext } from "../../App";
import useAPI from "../../Utils/useAPI";
import { Page } from "../Containers";

function TodoList({ dashboard }) {
  const { userId } = useContext(AppContext);
  const [todos, setTodos] = useState([]);
  const [viewCompleted, setViewCompleted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const getTodos = useAPI("get", `/api/todo?created_by=${userId}`);

  useEffect(() => {
    if (getTodos) {
      setTodos(getTodos);
    }
  }, [getTodos]);

  const addTodo = e => {
    e.preventDefault();

    const newTodo = {
      value: userInput,
      isCompleted: false,
      created_by: userId
    };

    // send to API
    axios.post("api/todo", newTodo).then(response => {
      setTodos([response.data, ...todos]);
      setUserInput("");
    });
  };

  const markCompleted = id => {
    const theTodo = todos.find(todo => todo._id === id);

    axios
      .put(`/api/todo/${id}`, { isCompleted: !theTodo.isCompleted })
      .then(res => {
        setTodos(
          todos.map(todo => {
            if (todo._id === id) {
              todo.isCompleted = !todo.isCompleted;
            }
            return todo;
          })
        );
      })
      .catch(err => console.log(err));
  };

  const deleteCompleted = id => {
    axios
      .delete(`/api/todo/${id}?created_by=${userId}`)
      .then(response => {
        setTodos([...todos.filter(todo => todo._id !== response.data._id)]);
      })
      .catch(err => console.log(err));
  };

  return (
    <Page>
      <div className={!dashboard ? "todos" : "todos dashboard"}>
        {!dashboard && (
          <div className="pageHeader">
            <h1>Reminders</h1>
          </div>
        )}
        {!dashboard && (
          <form className="todos-form">
            <input
              className="todos-input"
              type="text"
              placeholder="add todo..."
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
            />
            <button className="todos-add" onClick={e => addTodo(e)}>
              Add
            </button>
          </form>
        )}
        {!dashboard && (
          <button
            className="viewCompleted"
            onClick={() => setViewCompleted(!viewCompleted)}
          >
            <i className="far fa-eye" />
            {!viewCompleted ? " View Completed" : " Hide Completed"}
          </button>
        )}
        <ul className="todos-list-group">
          {todos.map(todo => {
            if (!viewCompleted) {
              if (!todo.isCompleted) {
                return (
                  <TodoItem
                    key={todo._id}
                    values={todo}
                    markCompleted={markCompleted}
                    deleteCompleted={deleteCompleted}
                  />
                );
              } else {
                return null;
              }
            } else {
              return (
                <TodoItem
                  key={todo._id}
                  values={todo}
                  markCompleted={markCompleted}
                  deleteCompleted={deleteCompleted}
                />
              );
            }
          })}
        </ul>
      </div>
    </Page>
  );
}

export default TodoList;
