import React, { useEffect, useState } from "react";
import "./List.css";
import AddTodo from "./AddTodo";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { Container, Card } from "react-bootstrap";
import SkeletonNew from "./Skeleton";

const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/todo");
    const todos = await response.json();

     setTodos(todos.data);
     
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      {loading && <SkeletonNew />}

      <Container className="p-0  px-sm-3 py-4 h-75">
        {todos.length == 0 ? (
          <>
            <div className="h-100">
              <Card className="d-flex p-4 no-task-card">
                <Card.Body>
                  <Card.Title className="mb-3">You have no task</Card.Title>
                  
                    <AddTodo todos={todos} fetchTodos={fetchTodos} />
                  
                </Card.Body>
              </Card>
            </div>
          </>
        ) : (
          <>
            <Cards todos={todos} fetchTodos={fetchTodos} />
            <SearchBar
              setTodos={setTodos}
              todos={todos}
              fetchTodos={fetchTodos}
            />
          </>
        )}
      </Container>
    </TodosContext.Provider>
  );
}
