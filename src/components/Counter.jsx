import React, {useState} from 'react';
export default function Counter({total,onClicks}) {
  const [num,setNumber] = useState(0);
  return (
    <>
      <div className="counter">
        <span className="number">
          {num} <span className="total">/{total}</span>
        </span>
        <button className="button" 
          onClick={() => {
            setNumber((prev) => {return prev + 1});
            console.log(num);
            onClicks();
          }}
        >Add +</button>
      </div>
    </>
  );
}
