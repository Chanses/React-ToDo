import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface IDeleteTaskButton {
  setModalState: (state: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  deleteTask: (id: string) => void;
  modalState: ModalState;
  itemId: string;
}

const DeleteTaskButton = (props: IDeleteTaskButton) => {
  return (
    <button
      name="Задачи"
      type="submit"
      onClick={() => {
        props.deleteTask(props.itemId);
        props.setModalState(modalStateValues.CloseSave.DeleteTask);
        props.setName("");
        props.setDescription("");
      }}
    >
      Да
    </button>
  );
};

export default DeleteTaskButton;
