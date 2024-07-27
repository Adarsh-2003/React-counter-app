import {useState} from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  function incFunc(){
    if (counter < 20 && counter > -1){
      setCounter(counter + 1)
    }
  }

  function decFunc(){
    if (counter < 21 && counter > 0)
    setCounter(counter - 1)
  }


  return (
    <>
       <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="bg-slate-500 p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Counter value: {counter}</h2>
        <div>
          <button 
            onClick={incFunc} 
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition"
          >
            Increase
          </button>
          <button 
            onClick={decFunc} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
