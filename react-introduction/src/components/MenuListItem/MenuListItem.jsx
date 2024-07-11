import { useState } from "react";
import s from "./style.module.css";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  function activate() {
    setIsHovered(true);
  }
  function deactivate() {
    setIsHovered(false);
  }

  function getBackgroundColor() {
    if (isHovered) {
      return "#cb9ce6";
    } else {
      if (props.isSelected) {
        return "#b864e8";
      } else {
        return "#ddc2ed";
      }
    }
  }
  const onItemClick = () => {
    props.onClick(props.difficulty);
  };
  return (
    <div
      onClick={onItemClick}
      className={s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {" "}
      Set to: {props.difficulty}
    </div>
  );
};
