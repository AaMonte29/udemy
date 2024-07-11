import "./global.css";
import { Car } from "./components/car/car";

export function App() {
  function sayHello(value) {
    alert("Hello from <App/>" + value);
  }
  return (
    <div>
      <p>I am the {"<App/>"}</p>
      <Car onCarClick={sayHello} />
    </div>
  );
}
