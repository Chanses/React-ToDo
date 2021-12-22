import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";
import { ICategoryItem } from "../../ListCategories/Categorie";
import { ITaskItem } from "../../ListTasks/Task";

interface IButtonPopUp {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
}

const CloseButton = (props: IButtonPopUp) => {
  return (
    <button
      onClick={() => {
        props.setModalState(modalStateValues.CloseDontSave.CloseCreateCategory);
        props.setModalState(modalStateValues.CloseDontSave.CloseCreateTask);
        props.setCategoryItem({
          ...props.categoryItem,
          name: "",
          description: "",
        });
        props.setTaskItem({
          ...props.taskItem,
          name: "",
          description: "",
        });
      }}
    >
      Закрыть
    </button>
  );
};

export default CloseButton;
