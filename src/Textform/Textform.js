//import { useState } from "react"
import React, {useState} from 'react'

export default function Textform(props) {

    
    const onUpClick = ()=>{
        console.log("cliscked");
        let textNew=text.toUpperCase();
        setText(textNew);
    }
const clear=()=>{
    setText("");
}

    const onLoClick = ()=>{
        console.log("cliscked");
        let textNew=text.toLowerCase();
        setText(textNew);
    }

    const onChange=(event)=>{
        console.log("onchange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`} >
        <h1 className='my-3'>{props.heading}
    </h1>
    <h3 className='my-2'>Enter your text below</h3>
      <div className='mb-3'>
      <textarea className="form-control" id="myBox" rows="8" onChange={onChange} value = {text} style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <button  className="btn btn-primary" onClick={onUpClick}>Click to change to upper case</button>
      <button  className="btn btn-primary mx-2" onClick={onLoClick}>Click to change to lower case</button>
      <button  className="btn btn-primary mx-2" onClick={clear}>Click to clear</button>

    
    <h2 className='my-3'>More info</h2>
    <p>{text.length===0?"0":text.split(" ").length} words and {text.length} characters</p>
    <p>{text.length===0?"0":0.008*text.split(" ").length} Minutes</p>
    <h4>Preview</h4>
<p>{text.length>0?text:"Enter your text above"}</p>
</div>

    </>
  )
}
