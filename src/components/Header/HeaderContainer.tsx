import React from "react";
import { ModalState } from "../../AppContainer";
import Header from "./Header";

interface IPopUp {
  setCategorieSection: () => void;
  setTaskSection: () => void;
  setModalState: ({}: ModalState) => void;
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
