const ADD_TODOS = "Todo/ADD_TODOS" as const;
const DELETE = "Todo/DELETE" as const;
const TOGGLE = "Todo/TOGGLE" as const;

export const add_todos = (add: string) => ({ type: ADD_TODOS, playload: add });
export const delete_todos = (deleted: number) => ({
  type: DELETE,
  playload: deleted,
});
export const toggle_todos = (id: number) => ({ type: TOGGLE, playload: id });

type TodosAction =
  | ReturnType<typeof add_todos>
  | ReturnType<typeof delete_todos>
  | ReturnType<typeof toggle_todos>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: "type", done: true },
  { id: 2, text: "script", done: true },
  { id: 3, text: "difficult", done: false },
];

function todos(state: TodosState = initialState, action: TodosAction) {
  switch (action.type) {
    case ADD_TODOS:
      const newID = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: newID,
        text: action.playload,
        done: false,
      });
    case DELETE:
      return state.filter((todo) => todo.id !== action.playload);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.playload ? { ...todo, done: !todo.done } : todo
      );
  }
}
