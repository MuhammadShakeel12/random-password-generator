import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data';

function App() {
  let [uppercase,setUppercase]= useState(false)
  let [lowercase,setLowercase]= useState(false)
  let [number,setNumber]= useState(false)
  let [symbols,setSymbols]= useState(false)
  let [fpass,setFpass] = useState('')

  let [passlen,setPasslen] = useState(10)

  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  
  let createpass=()=>{
    let finalpass=''
    if(uppercase || lowercase || number || symbols){
      let charset = ''
      
      if(uppercase) charset+=UC
      if(lowercase) charset+=LC
      if(number) charset+=NC
      if(symbols) charset+=SC
      for(let i=0;i<passlen;i++){
        finalpass+= charset.charAt(Math.floor(Math.random()*charset.length))
        
      }
      
      setFpass(finalpass)

    }else{
      alert("Check Atleast one box")
    }

  }

  return (
    <>
      <div className='pass-gen'>
        <h2>Password Generator</h2>
        <div className='passwordbox'>
          <input type='text' readOnly value={fpass} /><button onClick={copypass}>copy</button>
        </div>
        <div className='pass-len'>
          <label>Password length</label>
          <input type='number' max={20} min={10} value={passlen} onChange={(event)=>setPasslen(event.target.value)}/>
        </div>
        <div className='pass-len'>
          <label>Include upper case letters</label>
          <input type='checkbox' checked = {uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className='pass-len'>
          <label>Include lower case letters</label>
          <input type='checkbox' checked = {lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>
        <div className='pass-len'>
          <label>Include Numbers</label>
          <input type='checkbox' checked = {number} onChange={()=>setNumber(!number)}/>
        </div>
        <div className='pass-len'>
          <label>Include Symbols</label>
          <input type='checkbox' checked = {symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>
        <button className='btn' onClick={createpass}>Generat Password</button>
      </div>
    </>
  );
}

export default App;
