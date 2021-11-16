import { useState } from "react";
import "./styles.css";

export default function Search({ onClick }) {
  const [input, setInput] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onClick(input)}>Pesquisar</button>
    </div>
  );
}
