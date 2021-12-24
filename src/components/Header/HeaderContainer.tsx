import React from "react";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import Header from "./Header";

interface IPopUp {
  setCategorieSection: () => void;
  setTaskSection: () => void;
  setModalState: (state: ModalState) => void;
  section: boolean;
}

const HeaderContainer = (props: IPopUp) => {
  const CreateButtonOnClick = () => {
    if (!props.section)
      props.setModalState(modalStateValues.Open.OpenCreateCategory);
    else props.setModalState(modalStateValues.Open.OpenCreateTask);
  };
  const HeaderValues = {
    value: props.section ? "Добавить задачу" : "  Добавить категорию",
  };

  return (
    <>
      <Header
        {...props}
        HeaderValues={HeaderValues}
        CreateButtonOnClick={CreateButtonOnClick}
      />
    </>
  );
};

export default HeaderContainer;
