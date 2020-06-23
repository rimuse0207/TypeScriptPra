import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    { id: 1, text: "Context API", done: true },
    { id: 2, text: "Redux API", done: true },
    { id: 3, text: "Redux-Thunk API", done: false },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
