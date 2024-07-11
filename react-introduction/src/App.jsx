import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
  const [currentDifficulty, changeDifficulty] = useState("med");

  const onMenuListItemClick = (difficulty) => {
    changeDifficulty(difficulty);
  };
  return (
    <div>
      <h1>Pick Your Difficulty:</h1>
      <div className={s.pretty}>
        <MenuList
          onItemClick={onMenuListItemClick}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
