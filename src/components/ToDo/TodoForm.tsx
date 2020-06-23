import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
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
