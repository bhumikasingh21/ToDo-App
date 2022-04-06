import React from 'react';
import './App.css';

function App() {
const [input,setInput]=React.useState("");
const [output,setOutput]= React.useState([]);

const handleChange=(event)=>{
  setInput(event.target.value)
}

const handleData=()=>{
  setOutput((data)=>{
    return [...data ,input]
  })
  setInput("");
}

const Delete=(id)=>{
  console.log("delete",id)
  const newData = output.filter((value,key)=>{
  return key+1 !== id

  })
  console.log(newData)
  setOutput(newData)
}
 console.log(output)
  return (
  <> 
  <div className='todo'>
    <h2>TO DO LIST</h2>
    <div className='todoinput'>
    <input type="text" placeholder='Add item' className='todo-input' value={input} onChange={handleChange}/>
    <button className='btn' onClick={handleData}>+</button>
    </div>
    <div >

      {
        output.map((value,key)=>{
          return <div className='todo-output'>
           <h2>{value} </h2>
          <button className='btn' onClick={()=>Delete(key+1)}>x</button>
          
      </div>       }) 
      }
      <br/>
    </div>
  </div>
  </>
  );
}

export default App;
