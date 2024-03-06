import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

const Container = () => {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats numberOfCharacters={numberOfCharacters} />
    </main>
  );
};

export default Container;
