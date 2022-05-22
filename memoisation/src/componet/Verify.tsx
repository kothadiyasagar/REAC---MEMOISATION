import { memo, useCallback, useState } from "react"
  export  const Verify = (props:any)=>{
   
    
     const {elem, setMemoup,memoup}= props
    
       const sagar = useCallback((elem:any)=>{
        elem.verifly=true
        console.log(elem)
        console.log(sagar,"fkdhsksg")
         setMemoup([...memoup])
       },[])

     
   
  
    return (
        <>
         <button onClick={()=>sagar(elem)}>Verify</button>
        </>
    )

  }

  export  const Datamemo = memo(Verify
    )