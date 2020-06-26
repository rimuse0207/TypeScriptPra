const INCREASE = "counter2/INCREASE" as const;
const DECREASE = "counter2/DECREASE" as const;
const INCREASEBY = "counter2/INCREASEBY" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASEBY,
  playload: diff,
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASEBY:
      return { count: state.count + action.playload };
    default:
      return state;
  }
}

export default counter;
