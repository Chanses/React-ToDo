import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface ICloseDeletePopUpButton {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setModalState: (state: ModalState) => void;
}

const CloseDeletePopUpButton = (props: ICloseDeletePopUpButton) => {
  return (
    <button
      type="submit"
      onClick={() => {
        props.setModalState(modalStateValues.CloseDontSave.CloseDeleteCategory);
        props.setModalState(modalStateValues.CloseDontSave.CloseDeleteTask);
        props.setName("");
        props.setDescription("");
      }}
    >
      Нет
    </button>
  );
};

export default CloseDeletePopUpButton;
