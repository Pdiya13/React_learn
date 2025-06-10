import { useState,useCallback,useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [CharAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*(){}~`+-_="
    
    for(let i = 0;i<length;i++)
    {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numberAllowed,CharAllowed,setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length); //define range how many element to be selected
    window.navigator.clipboard.writeText(password )
  },[password])

  useEffect(()=>{
    passwordGenerator( )
  },[length,CharAllowed,numberAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-6 my-8 p-8 mt-10 text-gray-400 bg-gray-700'>
        <h1 className='text-white text-center mb-6'>Password Generator</h1>
        <div className='flex flex-shadow rounded-lg overflow-hidden mb-4 bg-white'>
           <input
           type = "text"
           value = {password} 
           className='outline-none w-full py-1 px-3'
           placeholder = 'Password'
           readOnly
           ref={passwordRef}
           />
           <button onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} 
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input
            type='checkbox'
            defaultChecked = {numberAllowed}
            id='numberInput'
            className='mt-1'
            onChange={() => {setNumberAllowed((prev) => !prev);
            }} 
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input
            type='checkbox'
            defaultChecked = {CharAllowed}
            id='characterInput'
            className='mt-1'
            onChange={() => {setCharAllowed((prev) => !prev);
            }} 
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

