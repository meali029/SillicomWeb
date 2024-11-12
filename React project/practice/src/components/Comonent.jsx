import { useState } from 'react'

function Comonent() {
  const [count, setCount] = useState(0)
   let remove = ()=>
   {
    if (count==0)
    {
      setCount(0)
    }
   else 
   {
    setCount(count-1)
   }

   }
  return (
    <>
    
    </>
  )
}
export default Comonent
