import { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  return (
    <textarea
      className="textarea"
      value={text}
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
      }}
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
};

export default TextArea;
