import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color }}>

        <div className="fixed flex felx-wrap justify-center bottom-12
        inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
           px-3 py-3 rounded- xl">
            
            <button onClick={() => setColor("black")}
             className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "black"}}>
              Black
            </button>
            <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "red"}}>
              Red
            </button>
            <button onClick={() => setColor("brown")}
             className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "brown"}}>
              Brown
            </button> 
            <button onClick={() => setColor("lightblue")}
             className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "lightblue"}}>
              Light Blue
            </button>
            <button onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "skyblue"}}>
              Sky blue
            </button>
            <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "yellow"}}>
              Yellow
            </button>
            <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "pink"}}>
              Pink
            </button>
            <button onClick={() => setColor("lavender")}
             className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "lavender"}}>
              Lavender
            </button>
            <button onClick={() => setColor("purple")}
             className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "purple"}}>
              Purple
            </button>
            <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "green"}}>
              Green
            </button>
            <button onClick={() => setColor("seagreen")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "seagreen"}}>
              Sea Green
            </button>
            <button onClick={() => setColor("lightgreen")}
            className="outline-none px-4 py-1 rounded "
             style={{backgroundColor: "lightgreen"}}>
              Leaf Green
            </button>

           </div>
        </div>
      </div>
      
    </>
  )
}

export default App
