import { Greetings } from "./components/greetings/greetings";
import { Car } from "./components/car/car";
import "./global.css";

export function App() {
  return (
    <div>
      <Car />
      <Greetings />
    </div>
  );
}
