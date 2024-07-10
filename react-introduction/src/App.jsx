import { Greetings } from "./Greetings";

{
  /*Returning a component within a component as well as multiple things*/
}
export function App() {
  return (
    <div>
      <h1>This is my first react project!</h1>
      <input
        type={"checkbox"}
        checked
        onChange={function () {
          console.log("You clicked the checkbox.");
        }}
      />
      <Greetings
        firstName={"Aaron"}
        age={22}
        car={{ brand: "subaru", color: "white" }}
      >
        image={<img src="https://picsum.photos/200/300" />}
      </Greetings>
    </div>
  );
}
