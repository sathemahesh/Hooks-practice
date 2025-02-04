import { useState } from 'react'

import './App.css'

const  App= ()=>  {
   const [ details, setDetails] = useState({counter:0, name: ""})
  function increaseCounter()
  {
      setDetails((prev) => ({
        ...prev,
          counter:prev.counter+1,
      }));
  }
  console.log(details);

  return (
    <>
      <div> 

        <input type="text" onChange={e=> setName( e.target.value)}></input>
       
       <h1> { details.name} has clicked { details.counter} times !!</h1>
       <button onClick={increaseCounter}> increase </button>
      </div>
    </>
  )
}

export default App
