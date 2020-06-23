import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow";
type Action =
  | { type: "INCREASE"; count: number }
  | { type: "TEXTCHANGE"; text: string }
  | { type: "COLORCHANGE"; color: Color }
  | { type: "TOOGLE" };

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: action.count,
      };
    case "TEXTCHANGE":
      return {
        ...state,
        text: action.text,
      };
    case "COLORCHANGE":
      return {
        ...state,
        color: action.color,
      };
    case "TOOGLE":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Fail Action");
  }
}

const ReducerPratice = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });
  const setCount = () => dispatch({ type: "INCREASE", count: 5 });
  const setText = () => dispatch({ type: "TEXTCHANGE", text: "BYE" });
  const setColor = () => dispatch({ type: "COLORCHANGE", color: "yellow" });
  const setToggle = () => dispatch({ type: "TOOGLE" });
  return (
    <div>
      <p>Count:{state.count}</p>
      <p>text:{state.text}</p>
      <p>color:{state.color}</p>
      <p>isGood:{state.isGood ? "true" : "false"}</p>
      <button onClick={setCount}>SET_COUNT</button>
      <button onClick={setText}>SET_TEXT</button>
      <button onClick={setColor}>SET_COLOR</button>
      <button onClick={setToggle}>TOGGLE_GOOD</button>
    </div>
  );
};

export default ReducerPratice;
