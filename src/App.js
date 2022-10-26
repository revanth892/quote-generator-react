import React,{useEffect} from 'react';
import {useState} from 'react';
import Display from './componets/Display';
const url="https://api.quotable.io/random";
function App() {
  const[data,setData]=useState([]);
  const getData = async() =>{
    const response = await fetch(url)
    const data1= await response.json()
    setData(data1)
  }
  
  useEffect(()=>{
    getData();
  },[])
  return (

    <>
    <div className='main'>
      <Display next={data}/>
      <button className='btn ' onClick={()=>getData()}>Next</button>
    </div>
    <div className='details'>
        <p>Made by revanth892(github)</p>
    </div>
    </>
  );
}

export default App;
