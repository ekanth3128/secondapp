import React,{useState} from 'react'


export default function Textform(props) {
  const handleupclick=()=>{
    console.log("upper case was clicked" + text);
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase");
  }
  
  const handleloclick=()=>{
    console.log("lower case was clicked" + text);
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to lowercase");
  }
  const handleCpclick=()=>{
    console.log("To clear" + text);
    let newtext='';
    setText(newtext)
    props.showAlert("cleared")
  }
  const handleonchange=(event)=>{
    console.log("Text here");
    setText(event.target.value)
  }

  
  const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3" >
<div className="shadow p-1 mb-1 bg-body-tertiary rounded">
<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'white':'grey'}} id="myBox" rows="9"></textarea>
</div></div>
<button className="btn btn-primary mx-3" onClick={handleupclick}>Convert to upper case</button>
<button className="btn btn-primary mx-3" onClick={handleloclick}>Convert to lower case</button>
<button className="btn btn-primary mx-3" onClick={handleCpclick}>Clear Text</button>
    
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Text your summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} time to read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:'Enter the text above to preview here'}</p>
    </div>
    </>
  )
}
