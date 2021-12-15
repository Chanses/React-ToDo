import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

interface IPopUp {
  toggleCreateTaskPopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  toogleEditHandlerCreate: () => void;
  setCategorieSection: () => void;
  setTaskSection: () => void;
}

const HeaderContainer: React.FC<IPopUp> = (props) => {
  return (
    <>
      <Header {...props} />
    </>
  );
};

export default HeaderContainer;
