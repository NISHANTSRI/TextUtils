import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, settext] = useState("");
        const handleClick = ()=>{
                console.log('upper case was clicked' + text);
                let newText = text.toUpperCase();
                settext(newText);
        }

        const handleChange= (event)=>{
                console.log('on change');
                settext(event.target.value);
        }
    return (
        <>
        
        <div className="container my-3" >
            <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} rows="10" onChange={handleChange}></textarea>
            </div>
            <div className="button btn btn-primary" onClick={handleClick} >Convert to upperCase</div>
        
        </div>
        <div className="container my-2">
            <h1 style={{color: props.mode==='light'?'black':'white'}}>Your Text Summary</h1>
            <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{color: props.mode==='light'?'black':'white'}}>{0.008 * text.split(" ").length} Minutes to read this</p>

        </div>
        </>
    )
}
