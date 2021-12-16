import React from "react";
import Header from "./Header";

interface IPopUp {
  toggleCreateTaskPopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  toogleEditHandlerCreate: () => void;
  setCategorieSection: () => void;
  setTaskSection: () => void;
  section: boolean;
}

const HeaderContainer: React.FC<IPopUp> = (props) => {
  return (
    <>
      <Header {...props} />
    </>
  );
};

export default HeaderContainer;
