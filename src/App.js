import React from 'react';
import './style.css';
import {useState} from "react"

export default function App() {
  let [age, setAge] = useState(0);
let increment = ()=>{
  setAge(age++)
}
let decrease = ()=>{
  setAge(age--)
}
  return <div>
    <p >{age}</p>
    <button onClick={increment}>Add</button>
    <button onClick={decrease}>sub</button>

  </div>;
}
