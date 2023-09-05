import { useState } from 'react';

export default function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

const DateCounter = () => {
  // set the state
  // show state on the screen (use in the JSX)
  // use function to update the state
  const [count, setCount] = useState(0);
  const [ step, setStep ] = useState(1);

  const date = new Date("june 12 2027");
  date.setDate(date.getDate() + count);
  // setDate set the number date in a month
  // getDate gets the date number in the current date

  // decrease counter
  const decrementStep = () => {
    setStep((prevStep) => prevStep - 1);
  }

  // increase counter
  const incrementStep = () => {
    setStep((prevStep) => prevStep + 1);
  }
  // decrease counter
  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  }

  // increase counter
  const increment = () => {
    setCount((prevCount) => prevCount + step);
  }

  return (
    <div>
      <button onClick={decrementStep}>-</button>
      <span>Step: {step}</span>
      <button onClick={incrementStep}>+</button>

      <button onClick={decrement}>-</button>
      <span>Count: {count}</span>
      <button onClick={increment}>+</button>

      <p>
        <span>
          {
            count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`
          }
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>

  );
}