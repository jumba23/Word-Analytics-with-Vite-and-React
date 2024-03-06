import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

const Container = () => {
  const [text, setText] = useState("");
  const numberOfWords = text.split(" ").filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        instagramCharactersLeft={instagramCharactersLeft}
        facebookCharactersLeft={facebookCharactersLeft}
        numberOfWords={numberOfWords}
      />
    </main>
  );
};

export default Container;
