import { useReducer, useState } from 'react';

const counterInitialState = { counter: 0 };

function counterReducer(state, action) {
  const { type, payload } = action;

  console.log('State', state);
  console.log('Action ', action);
  switch (type) {
    case 'decrementTen':
      return { counter: state.counter - 10 };
    case 'decrement':
      return { counter: state.counter - 1 };
    case 'increment':
      return { counter: state.counter + +payload.input };
    case 'incrementTen':
      return { counter: state.counter + 10 };
    case 'resetToInital':
      return { counter: 0 };
    default:
      throw new Error();
  }
}

function App() {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    counterInitialState
  );

  const [input, setInput] = useState(0);
  
  return (
    <div style={{ display: 'Flex', justifyContent: 'center' }}>
      <button
        onClick={() =>
          counterDispatch({ type: 'decrementTen', payload: { one: 1, two: 2 } })
        }
      >
        -10
      </button>
      <button onClick={() => counterDispatch({ type: 'decrement' })}>-</button>
      <div>{counterState.counter}</div>
      <button
        onClick={() =>
          counterDispatch({ type: 'increment', payload: { input: input } })
        }
      >
        +
      </button>
      <button onClick={() => counterDispatch({ type: 'incrementTen' })}>
        +10
      </button>
      <button onClick={() => counterDispatch({ type: 'resetToInital' })}>
        Reset to Initial
      </button>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
}

export default App;

// const decrementTen = () => {
//   setCounter(counter - 10);
// };

// const decrement = () => {
//   setCounter(counter - 1);
// };

// const increment = () => {
//   setCounter(counter + 1);
// };

// const incrementTen = () => {
//   setCounter(counter + 10);
// };

// const resetToInitial = () => {
//   setCounter(0);
// };
