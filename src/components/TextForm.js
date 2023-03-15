import { useState } from 'react'

export const TextForm = (props) => {
    let textArea = document.getElementById("myTextarea");

    const modeColor = () => {
        return props.mode === 'dark' ? 'light': 'dark';
    }

    const [text, setText] = useState('');

    const clickUpHandler = () => {
        if(textArea.value.length > 0){
            const newText = text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to Uppercase', 'success');
        }
    }

    const clickLowHandler = () => {
        if(textArea.value.length > 0){
            const newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to Lowercase', 'success');
        }
    }

    const clickReset = () => {
        if(textArea.value.length > 0){
            const newText = '';
            setText(newText);
            props.showAlert('Text Reset completed', 'success');
        }
    }

    const copyHandler = () => {
        if(textArea.value.length > 0){
            textArea.select();
            textArea.setSelectionRange(0, 99999); /* For mobile devices */
            /* Copy the text inside the text field */
            navigator.clipboard.writeText(textArea.value);
            props.showAlert('Copied to clipboard', 'success');
        }
    }

    const removeSpacesHandler = () => {
        if(textArea.value.length > 0){
            setText(text.replace(/\s+/g, " "));
            props.showAlert('Extra spaces removed', 'success');
        }
    }

    const changeHandler = (event) => {
        setText(event.target.value)
    }

    const wordCount = () => {
        return text.split(/\s+/).filter(value => value !== "").length 
    }

    return (
        <>
        <div className={`container text-${modeColor()}`}>
            <div className="mb-3 my-3">
                <h3 className={`form-label text-${modeColor()}`}>{props.heading}</h3>
                <textarea id="myTextarea" className="form-control" value={text} placeholder="Enter text here" onChange={changeHandler} rows="3"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clickUpHandler}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1" onClick={clickLowHandler}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1" onClick={clickReset}>Reset</button>
            <button disabled={text.length===0} className="btn btn-success mx-1" onClick={copyHandler}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-info mx-1" onClick={removeSpacesHandler}>Remove extra spaces</button>
        </div>

        <div className={`container my-3 form-label text-${modeColor()}`}>
            <h3 className="form-label">Your text Summary</h3>
            <p>{wordCount()} words. {text.trim().length} Letters.</p>
            <p>{ 0.008 * wordCount()} Minutes read</p>

            <h3>Preview</h3>
            <p>{text.length>0 ? text : 'Please enter text in above textbox to preview'}</p>
        </div>
        </>
    )
}