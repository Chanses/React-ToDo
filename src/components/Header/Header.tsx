import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./HeaderStyles.css";
import CreateNewTaskButton from "./CreateButtons/CreateNewTaskButton";
import CreateNewCategorieButton from "./CreateButtons/CreateNewCategorieButton";

interface IPopUp {
  toggleCreateTaskPopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  toogleEditHandlerCreate: () => void;
  setCategorieSection: () => void;
  setTaskSection: () => void;
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
      <Routes>
        <Route
          path="/tasks"
          element={
            <CreateNewTaskButton
              toggleCreateTaskPopUp={props.toggleCreateTaskPopUp}
              toogleEditHandlerCreate={props.toogleEditHandlerCreate}
            />
          }
        ></Route>
        <Route
          path="/categories"
          element={
            <CreateNewCategorieButton
              toggleCreateCategoriePopUp={props.toggleCreateCategoriePopUp}
              toogleEditHandlerCreate={props.toogleEditHandlerCreate}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Header;
