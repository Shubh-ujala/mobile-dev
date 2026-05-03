import React, { useState } from 'react'

function Form() {

    //controlled
//   const [name,setName] = useState("");
//   return (
//    <>
//     <input type="text" 
//    value={name}
//    onChange={(e)=>setName(e.target.value)}
//    placeholder='Enter your name'/>

//    <p>Hello : {name}</p>
//    </>
//   )

    // uncontrolled 
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.elements.name.value)
    }
    return <form onSubmit={handleSubmit}>
        <input name='name' />
        <button type="submit">Submit</button>
    </form>
}

export default Form


/*
    form (email,name,password)
    onSubmit me ek obj me 3 ko console karna hai
*/