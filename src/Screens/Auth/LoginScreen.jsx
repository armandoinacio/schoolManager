import React from 'react';
import style from './style/LoginScreen.module.css'
import { useState } from 'react';
import {FaUser as FaUser} from 'react-icons/fa'
export default function LoginScreen() {
    const [inputValue,setInputValue]=useState('')
    const InputTextController=(event)=>{
        setInputValue(event.target.value)
    }
  return (
    <div className={style.container}>
    
      <div className={style.capa}>
     <FaUser style={{ fontSize: '8em', color: 'white' ,marginTop:34,marginLeft:130,marginRight:40,alignSelf:'center'}}/>
       <input className={style.inputPassword} type='password' value={inputValue} onChange={InputTextController} placeholder='Insira a senha' />
       <button className={style.button} >ENTRAR</button>
      </div>
  
    </div>
  );
}
