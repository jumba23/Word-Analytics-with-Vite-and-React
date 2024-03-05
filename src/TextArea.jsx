import { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      alert("No script tag allowed");
      newText = newText.replace("<script>", "");
    }
    setText(newText);
  };

  return (
    <textarea
      className="textarea"
      value={text}
      onChange={handleChange}
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
};

export default TextArea;
