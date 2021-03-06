import React, { useEffect, useState, useContext } from "react";
import TodoHelper from "./TodoHelper";
import AddTodo from "./AddTodo";
import "./List.css";
import { ReactComponent as Search } from "../../assets/search-solid.svg";
import { ListGroup, Card } from "react-bootstrap";

function SearchBar({ todos, fetchTodos, setTodos, ff }) {
  const [filtertodos, setfiltertodos] = useState([]);
  const [filter, setfilter] = useState(false);

  function handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = [...todos];

      newList = currentList.filter((todo) => {
        const lc = todo.item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        setfilter(filter);
        return lc.includes(filter);
      });
      setfiltertodos(newList);
    } else {
      newList = [...todos];
      var ff = newList.sort((a, b) => b.id - a.id);

      setfiltertodos(ff);
    }
  }

  const [checked, setChecked] = useState(false);

  const handleClick = (id) => {
    const currentTodos = [...todos];
    const index = currentTodos.findIndex((el) => el.id === id);

    currentTodos[index].completed = !currentTodos[index].completed;
    setTodos(currentTodos);
  };

  return (
    <div className="mt-5">
      <div className=" tasks  ">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <Card.Title className="crad-title m-0">Tasks</Card.Title>
        </div>

        <div style={{ position: "relative" }} className="tasks-search px-3">
          <input
            type="text"
            className=" searchBar mr-xl-3 "
            onChange={handleChange}
            placeholder="Search by task name"
          />

          <Search className="search-svg" />

          <AddTodo todos={todos} fetchTodos={fetchTodos} />
        </div>
      </div>
      <ListGroup variant="flush" className="rounded mt-3 list-shadow">
        {filter
          ? filtertodos.map((todo) => {
              return (
                <li key={todo.id} style={{ paddingLeft: "40px" }} className="list-group-item">
                  <TodoHelper
                    item={todo.item}
                    completed={todo.completed}
                    id={todo.id}
                    fetchTodos={fetchTodos}
                    checked={checked}
                    handle={handleClick}
                  />
                </li>
              );
            })
          : todos.map((todo) => {
              return (
                <li key={todo.id} style={{ paddingLeft: "40px" }} className="list-group-item">
                  <TodoHelper
                    item={todo.item}
                    checked={checked}
                    handle={handleClick}
                    completed={todo.completed}
                    id={todo.id}
                    fetchTodos={fetchTodos}
                  />
                </li>
              );
            })}
      </ListGroup>
      
      
    </div>
  );
}

export default SearchBar;
