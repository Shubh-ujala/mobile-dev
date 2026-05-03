import React from 'react'

function Events() {
 
  const onClick = (event)=>{
    console.log(event);
    
  }
  return (
    <button onClick={onClick}>click me</button>
  )
}

export default Events
