import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface IButtonPopUp {
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
}

const CloseButton = (props: IButtonPopUp) => {
  return (
    <button
      onClick={() => {
        props.setModalState(modalStateValues.CloseDontSave.CloseCreateCategory);
        props.setModalState(modalStateValues.CloseDontSave.CloseCreateTask);
        props.setName("");
        props.setDescription("");
      }}
    >
      Закрыть
    </button>
  );
};

export default CloseButton;
