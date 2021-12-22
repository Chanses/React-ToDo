import React from "react";
import { ICategoryItem, ITaskItem, ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface ICloseDeletePopUpButton {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
}

const CloseDeletePopUpButton = (props: ICloseDeletePopUpButton) => {
  return (
    <button
      type="submit"
      onClick={() => {
        props.setModalState(modalStateValues.CloseDontSave.CloseDeleteCategory);
        props.setModalState(modalStateValues.CloseDontSave.CloseDeleteTask);
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
      Нет
    </button>
  );
};

export default CloseDeletePopUpButton;
