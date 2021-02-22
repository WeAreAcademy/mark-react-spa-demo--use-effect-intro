import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("New state value for count:", count);
  }, [count]);

  useEffect(() => {
    console.log("New state value for inputText:", inputText);
  }, [inputText]);

  useEffect(() => {
    console.log("New state value for either count or isChecked", {
      count,
      isChecked,
    });
  }, [count, isChecked]);

  return (
    <>
      <h1>useEffect intro</h1>
      <h2>
        <code>string</code> state
      </h2>
      <input
        placeholder="Type whatever here"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <hr />
      <h2>
        <code>number</code> state
      </h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+ 1</button>
      <button onClick={() => setCount((prev) => prev + 5)}>+ 5</button>
      <hr />
      <h2>
        <code>boolean</code> state
      </h2>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>Tick me</label>
    </>
  );
}

export default App;
