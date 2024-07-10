import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  const [age, addAge] = useState(22);
  function increaseAge() {
    addAge(age + 1);
  }
  return (
    <div>
      <button onClick={increaseAge}>Increase age</button>
      <AgeDisplay age={age} />
    </div>
  );
}
