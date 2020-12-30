import React from 'react';
import './Input.css';

const input =(props)=> {
let inputelement = null;
switch(props.inputType){
    case ('input'):
        inputelement =<input 
        className='Input' {...props}></input>
        break;
    case('textarea'):
        inputelement = <textarea {...props}/>
        break;
    default:
        inputelement =<input {...props}/>
    }
    return(
        <div className='Input'>
        <label>{props.label}</label>
        {inputelement}
        </div>
    )
}
export default input;