import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter , setCounter] = useState(0)

  const addValue = () => {
    console.log("clikcked", counter)
    if(counter<=19)
    {
      counter = counter+1
      setCounter(counter)
      setCounter(counter)
      setCounter(counter) 

//       --------Important details about React state updating:-------
// React's setState (like setCounter) is asynchronous and batched.
// Calling setCounter(counter) multiple times with the same value won't cause multiple
//  increments or multiple re-renders because React batches updates.
// So calling setCounter(counter) 3 times with the same value is redundant and has
//  the same effect as calling it once.
// and final setCounter called value is considered  
// React will process these calls together and only apply the final state once.


// Use the updater function form if your new state depends on the previous state:
// ----------   setCounter(prev => prev + 1); --------------
// This guarantees the increment is based on the latest value, even if multiple 
// state updates happen asynchronously.

    }
  }

  const removeValue = () => {
    console.log("clicked", counter)
    if(counter>=1)
    {
      counter = counter-1
      setCounter(counter)
    }
    
  }
  let [user,setUser] = useState({
      name : "Diya",
      age : 19,
      city : "Nadiad",
    });
    const [nameInput , setNameInput] = useState("");
    const [cityInput, setCityInput] = useState("");

    const changeName = () => {
      setUser({
        ...user,
        name : nameInput,
      });
      setNameInput("");   // Clear the input field after update (optional)
    }

    const increaseAge = () =>
    {
      setUser({
        ...user,
        // age : age+1    //You're calculating a new value based on the current age, 
                          // so you must write user.age + 1.               
        age : user.age + 1
      });
    };

    const changeCity = () => {
    setUser({
      ...user,
      city: cityInput
    });
    setCityInput(""); // Clear the input field after update (optional)
  };
  

  return (
    <>
      <div>
        <h1>User Profile</h1>
        <p><strong>Name: </strong>{user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>City:</strong> {user.city}</p>

        <input type="text" placeholder="Enter New Name" value={nameInput}
        onChange={(e) => setNameInput(e.target.value)} />
        <button onClick={changeName}>Change Name</button>
        <br/> <br/>

        <button onClick={increaseAge}>Increase Age</button>
        <br /><br />

        <input type="text" placeholder="Enter new city" value={cityInput}
          onChange={(e) => setCityInput(e.target.value)} />  

        {/* e is the event object (automatically passed when the user types).
            e.target refers to the input field itself.
            e.target.value is the current text inside the input field.
            setCityInput(...) is called to update the React state (cityInput) with the new value.
        */}
        <button onClick={changeCity}>Change City</button>
        
      </div>

      <div>
        <h1>Counter With React</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Increase Value</button>
        <br />
        <button onClick={removeValue}>Decrese Value</button>

      </div>

    </>
  )
}

export default App
