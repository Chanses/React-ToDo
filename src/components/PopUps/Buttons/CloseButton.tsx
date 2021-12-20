import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface IButtonPopUp {
  setModalState: ({}: ModalState) => void;
}

const CloseButton = (props: IButtonPopUp) => {
  return (
    <button
      onClick={() => {
        props.setModalState(modalStateValues.CloseDontSave.CloseCreateCategory);
        props.setModalState(modalStateValues.CloseDontSave.CloseCreateTask);
      }}
    >
      Закрыть
    </button>
  );
};

export default CloseButton;
