import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import { Memo } from './componet/Memo';

import './App.css';

function App() {
  const [count,setCount]=useState(0)
  // setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  // console.log("sagar")
  return (
    <>
    <div  style={{marginLeft:"30%"}}>
       <h1>{`count-${count}`}</h1>

      <Memo/>
    </div>
  
    </>
    
  );
}

export default App;
