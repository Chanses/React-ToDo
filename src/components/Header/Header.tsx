import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";
import CreateNewCategorieButton from "./CreateButton";
import CreateButton from "./CreateButton";

interface IPopUp {
  toggleCreateTaskPopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  toogleEditHandlerCreate: () => void;
  setCategorieSection: () => void;
  setTaskSection: () => void;
  section: boolean;
}

const Header: React.FC<IPopUp> = (props) => {
  let activeStyle = {
    color: "#8FB6FF",
  };

  return (
    <div className="Header">
      <div className="Header__Logo">
        <div className="Header__Logo-AppName">ToDo List</div>
        <div className="Header__Logo__Actions">
          <NavLink
            to="/tasks"
            onClick={props.setTaskSection}
            className={"Header__Logo__Actions-Tasks"}
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Задачи
          </NavLink>
          <p style={{ fontSize: "36px" }}>|</p>
          <NavLink
            to="/categories"
            onClick={props.setCategorieSection}
            className="Header__Logo__Actions-Categories"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Категории
          </NavLink>
        </div>
      </div>
      <CreateButton
        toggleCreateCategoriePopUp={props.toggleCreateCategoriePopUp}
        section={props.section}
        toogleEditHandlerCreate={props.toogleEditHandlerCreate}
        toggleCreateTaskPopUp={props.toggleCreateTaskPopUp}
      />
    </div>
  );
};

export default Header;
