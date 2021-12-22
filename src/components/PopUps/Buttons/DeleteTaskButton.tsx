import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";
import { ITaskItem } from "../../ListTasks/Task";

interface IDeleteTaskButton {
  setModalState: (state: ModalState) => void;
  deleteTask: (id: string) => void;
  setTaskItem: (state: ITaskItem) => void;
  taskItem: ITaskItem;
  modalState: ModalState;
}

const DeleteTaskButton = (props: IDeleteTaskButton) => {
  return (
    <button
      name="Задачи"
      type="submit"
      onClick={() => {
        props.deleteTask(props.taskItem.id);
        props.setModalState(modalStateValues.CloseSave.DeleteTask);
        props.setTaskItem({
          ...props.taskItem,
          name: "",
          description: "",
        });
      }}
    >
      Да
    </button>
  );
};

export default DeleteTaskButton;
