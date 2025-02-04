import React from 'react'

import {useRef} from "react";


function  Hook_2() {

  const inputEle =useRef();
  const handleClick =() =>
  {
    console.log(inputEle.current);
    inputEle.current.style.width="300px";
  }
  return (
    
       <div>
        <input type='text' ref ={inputEle} />
        <button onClick={handleClick}> click here </button>
       </div>
  )
}

export default Hook_2