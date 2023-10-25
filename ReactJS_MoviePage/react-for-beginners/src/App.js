import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const addCounter = () => {
    setValue((prev) => prev + 1)
  }
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  useEffect(() => {
    console.log("I run only once.")
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter])
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h2>{counter}</h2>
      <button onClick={addCounter}>Click Me!</button>
      <Button text={"Click Me"} />
    </div>
  );
}

export default App;
