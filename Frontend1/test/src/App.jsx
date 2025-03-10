import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [data, setData] = useState(0)
  try {
    const response = axios.get("https://todo-app-theta-jet-14.vercel.app/api/v1/todos/getAllTodo").then((res) => {
      return setData(res.data.data.allTodo)
    })
    console.log(response);
    console.log("hello");
  } catch (error) {
    console.log(error);
    
  }
  return (
    <>
      {data && data.map((data) => {
        console.log(data);
        return (<h1>{data.tittle}</h1>)
      })}
      <h1>Hello</h1>
    </>
  )
}

export default App
