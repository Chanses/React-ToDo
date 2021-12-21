import React from "react";
import { ModalState } from "../../AppContainer";
import Header from "./Header";

interface IPopUp {
  setCategorieSection: () => void;
  setTaskSection: () => void;
  setModalState: (state: ModalState) => void;
  section: boolean;
}

const HeaderContainer = (props: IPopUp) => {
  return (
    <>
      <Header {...props} />
    </>
  );
};

export default HeaderContainer;
