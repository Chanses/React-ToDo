import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { modalStateValues } from "../../../models/modalStateValues";
import { addTask, addCategory } from "../../../dbService";

interface IButtonPopUp {
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  modalState: ModalState;
  name: string;
  description: string;
}

const CreateButton = (props: IButtonPopUp) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <button
          name="createTaskButton"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateTask);
            addTask(props.name, props.description);
            props.setName("");
            props.setDescription("");
          }}
        >
          Создать
        </button>
      ) : (
        <button
          name="createCategorieButton"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateCategory);
            addCategory(props.name, props.description);
            props.setName("");
            props.setDescription("");
          }}
        >
          Создать
        </button>
      )}
    </>
  );
};

export default CreateButton;
