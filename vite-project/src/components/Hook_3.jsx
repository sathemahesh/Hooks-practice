


import React from 'react'
import {useState , useMemo} from 'react';


const expensiveCalculation =(num) =>
{
    console.log('Calculating...');

    let result =0;
    for( let i=0; i<1000000000; i++)
    {
        result+= num;
    }
    return result;
}


function Hook_3() {
   
     const [count, setCount ]= useState(0);
     const[otherCounter, setOtherCounter] = useState(0);


    // useMemo to memoize the expensive calculation
    const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
   <div>
     <h1>useMemo Hook Example</h1>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>

      <div>
        <h2>Other Counter: {otherCounter}</h2>
        <button onClick={() => setOtherCounter(otherCounter + 1)}>
          Increase Other Counter
        </button>
      </div>

      <h3>Expensive Calculation Result: {calculatedValue}</h3>
    </div >
   
  )
}

export default Hook_3