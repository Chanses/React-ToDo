import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { modalStateValues } from "../../../models/modalStateValues";

interface IButtonPopUp {
  setModalState: ({}: ModalState) => void;
  modalState: ModalState;
}

const SaveButton = (props: IButtonPopUp) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <button
          name="taskSaveButton"
          type="submit"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateTask);
          }}
        >
          Сохранить
        </button>
      ) : (
        <button
          name="categorieSaveButton"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateCategory);
          }}
        >
          Сохранить
        </button>
      )}
    </>
  );
};

export default SaveButton;
