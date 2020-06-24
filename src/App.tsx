import React from "react";
import "./style.scss";
import InputType from "./components/InputType";
import RedcuerPratice from "./components/ReducerPratice";
import RefPractice from "./components/RefPractice";
import TodoForm from "./components/ToDo/TodoForm";
import TodoList from "./components/ToDo/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";

function App() {
  const onsubmit = (form: { name: string; desc: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <InputType onSubmit={onsubmit}></InputType>
      <RedcuerPratice></RedcuerPratice>
      <RefPractice onSubmit={onsubmit}></RefPractice>
      <TodosContextProvider>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </TodosContextProvider>
    </div>
  );
}

export default App;
