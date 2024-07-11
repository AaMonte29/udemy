import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.difficulty === "Ez"}
        onClick={props.onItemClick}
        difficulty={"Ez"}
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onItemClick}
        difficulty={"Medium"}
      />
      <MenuListItem
        isSelected={props.difficulty === "Hard"}
        onClick={props.onItemClick}
        difficulty={"Hard"}
      />
      <MenuListItem
        isSelected={props.difficulty === "Impossible"}
        onClick={props.onItemClick}
        difficulty={"Impossible"}
      />
    </div>
  );
}
