import React from 'react'
 import {useState , useEffect} from 'react';

function Hook_1() {
   const[count , setCount] = useState(0);

   useEffect(() =>
{
    document.title = `${count} new messages `
}, []);

  return (
    <div>
        <h3> 
            {count} new Messahes !
        </h3>
     <button onClick={()=> setCount (count+1)}> increase </button>
    </div>
  )
}

export default Hook_1