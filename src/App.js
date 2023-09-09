import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [ step, setStep ] = useState(1);

  const date = new Date("june 12 2027");
  date.setDate(date.getDate() + count);
  
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
      <div>
        <input 
          type="range" 
          min="0" 
          max="10" 
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

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