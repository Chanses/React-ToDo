import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";
import Button from "../reused/Buttons/Button";

interface IPopUp {
  setCategorieSection: () => void;
  setTaskSection: () => void;
  HeaderValues: any;
  CreateButtonOnClick: () => void;
}

const Header = (props: IPopUp) => {
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
      <Button
        title={props.HeaderValues.value}
        onClick={props.CreateButtonOnClick}
        disabled={false}
        className={"Header__AddNewItem"}
      />
    </div>
  );
};

export default Header;
