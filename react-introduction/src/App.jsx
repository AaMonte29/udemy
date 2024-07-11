import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  return (
    <div>
      <h1>Pick Your Difficulty:</h1>
      <div className={s.pretty}>
        <MenuList />
        <DisplayDifficulty difficulty={"easy"} />
      </div>
    </div>
  );
}
