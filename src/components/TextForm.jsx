import React,{useState} from "react";


// RULE 
export default function TextForm() {
    const [text, setText] = useState("Enter your text here");


    const handleOnChange = (event) => {
        let newText = event.target.value
        // text = newText; this is wrong method to update
        setText(newText); // this is right way to update
    }

    const handleOnUpperCase = (event) => {
        let newText = text.toUpperCase()
        setText(newText);

    }

  return (
    <div>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
        <textarea
            value={text}
          className="form-control"
          onChange={handleOnChange}
          id="text"
          rows="3"
        ></textarea>
      </div>    
        <button onClick={handleOnUpperCase} className="btn btn-primary">Change to Uppercase</button>

    </div>
  );
}
