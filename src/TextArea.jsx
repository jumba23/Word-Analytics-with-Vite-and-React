import { useState } from "react";
import Warning from "./Warning";

const TextArea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    //basic validation
    if (newText.includes("<script>")) {
      setWarningText("No Script Tag Allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ Symbol Allowed");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
};

export default TextArea;
