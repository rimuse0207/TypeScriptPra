import React, { useState } from "react";
import { useTodosDispatch } from "../../contexts/TodosContext";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value,
    });
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="Enter your todolist"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit"></button>
    </form>
  );
};

export default TodoForm;
