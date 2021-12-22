import React from "react";
import { ICategoryItem, ITaskItem, ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { modalStateValues } from "../../../models/modalStateValues";

interface IButtonPopUp {
  setModalState: (state: ModalState) => void;
  editTask: (
    id: string,
    name: string,
    description?: string,
    categorie?: string
  ) => void;
  editCategory: (id: string, name: string, description?: string) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  handleSelect: () => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  selectValueId: string;
  isDirty: boolean;
  isInvalid: boolean;
  isChanged: boolean;
}

const SaveButton = (props: IButtonPopUp) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <button
          name="taskSaveButton"
          type="submit"
          style={{ background: "#adbad3", cursor: "default" }}
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateTask);
            props.handleSelect();
            props.editTask(
              props.taskItem.id,
              props.taskItem.name,
              props.taskItem.description,
              props.selectValueId
            );

            props.setTaskItem({
              ...props.taskItem,
              name: "",
              description: "",
            });
            props.setCategoryItem({
              ...props.categoryItem,
              name: "",
              description: "",
            });
          }}
          {...((props.isDirty && props.isInvalid) || !props.isChanged
            ? { disabled: true }
            : { disabled: false, style: { background: "#3F72AF" } })}
        >
          Сохранить
        </button>
      ) : (
        <button
          name="categorieSaveButton"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateCategory);
            props.editCategory(
              props.categoryItem.id,
              props.categoryItem.name,
              props.categoryItem.description
            );
            props.setTaskItem({
              ...props.taskItem,
              name: "",
              description: "",
            });
            props.setCategoryItem({
              ...props.categoryItem,
              name: "",
              description: "",
            });
          }}
        >
          Сохранить
        </button>
      )}
    </>
  );
};

export default SaveButton;
