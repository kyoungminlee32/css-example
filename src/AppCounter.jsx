import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [num,setNumber] = useState(0);
  const handleClick = () => {
    return setNumber((prev) => prev + 1);
  }
  return (
    <>
      <div className="container">
        <div className="banner">
          Total Count : {num} {num < 10 ? '🍕':'😠'}
        </div>
        <div className="counters">
          <Counter total={num} onClicks={handleClick} />
          <Counter total={num} onClicks={handleClick} />
        </div>
      </div>
    </>
  );
}
