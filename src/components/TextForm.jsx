import React, { useState } from "react";

// RULE
export default function TextForm() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    let newText = event.target.value;
    // text = newText; this is wrong method to update
    setText(newText); // this is right way to update
  };

  const handleOnUpperCase = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnLowerCase = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnClearText = (event) => {
    setText("");
  };

  return (
    <div>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
        <textarea
          value={text}
          className="form-control"
          onChange={handleOnChange}
          id="text"
          rows="8"
        ></textarea>
      </div>
      <button
        onClick={handleOnUpperCase}
        className="btn btn-outline-primary mx-2"
      >
        Convert to Uppercase
      </button>

      <button
        onClick={handleOnLowerCase}
        className="btn btn-outline-primary mx-2"
      >
        Convert to Lowers Case
      </button>

      <button
        onClick={handleOnClearText}
        className="btn btn-outline-danger mx-2"
      >
        Clear text
      </button>

      <div className="p-2">
        <h2>Your Text Summary</h2>
      </div>

      <p>Your text contains {text.split(" ").length -1}  words and {text.length} characters</p>

      <p>Average speed to read this text is {text.split(" ").length * 2.0}</p>

      <h3>Preview text</h3>
      <p>{text}</p>


    </div>
  );
}
