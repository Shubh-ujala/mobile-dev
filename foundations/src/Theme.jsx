import React, { useEffect, useState } from "react";

function Theme() {
  const [darkMode, setDarkMode] = useState(true);

  function onToggleTheme() {
    setDarkMode(!darkMode);
    console.log(darkMode);    
  }
  
  useEffect(()=>{},[])

  return (
    <div
    style={{
        height:'100vh',
        backgroundColor:darkMode ? "#121212" : '#fff',
        color:darkMode?'#fff':'#121212',
         display:"flex", 
         justifyContent:"center",
         alignItems:"center",
         flexDirection:'column'
    }}
    >
      <h3>{darkMode? 'toggle to light': 'toggle to dark'}</h3>
      <button
      onClick={onToggleTheme}>toggle</button>
    </div>
  );
}

export default Theme;
