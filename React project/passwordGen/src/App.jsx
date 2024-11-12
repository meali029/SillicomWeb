import { useState , useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [noallow, setallow] = useState(false)
  const [nochar, setchar] = useState(false)
  const [pass, setpass] = useState("")
  // Use ref hook
  const passwordRef = useRef(null)
  const password =useCallback(()=>
    {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(noallow) str = "0123456789"
        if(nochar) str = "@_!#$%&'()*+,-."
        for (let i = 0; i <= length; i++) {
          let char= Math.floor(Math.random() * str.length +1)
          pass += str.charAt(char)
        }
        setpass(pass)

    }, [length,noallow,nochar,setpass])
    const copyPasswordtoclipBoard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(pass)
    },[password])
  useEffect(()=>
  {
    password()
  },
[length,noallow,nochar,password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-400 bg-gray-700'>
        <div className='flex shadow rouund-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={pass}
           className='outline-none w-full py-1 px-3'
           placeholder='passoword'
           readOnly
           ref={passwordRef}
           />
           <button 
           onClick={copyPasswordtoclipBoard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length{length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type = "checkbox"
            defaultChecked = {noallow}
            id ="numberInput"
            onChange={()=>
            {
              setallow((prev) =>!prev)
            }
            }
            />
            <label >Number </label>
            <input 
            type = "checkbox"
            defaultChecked = {noallow}
            id ="numberInput"
            onChange={()=>
            {
              setchar((prev) =>!prev)
            }
            }
            />
            <label >Character </label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
