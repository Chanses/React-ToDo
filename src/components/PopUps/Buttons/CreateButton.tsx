import React from "react";
import { ICategoryItem, ITaskItem, ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { modalStateValues } from "../../../models/modalStateValues";
import { addTask, addCategory } from "../../../dbService";

interface IButtonPopUp {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  selectValueId: string;
  isDirty: boolean;
  isInvalid: boolean;
}

const CreateButton = (props: IButtonPopUp) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <button
          name="createTaskButton"
          type="submit"
          disabled={true}
          style={{ background: "#adbad3", cursor: "default" }}
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateTask);
            addTask(
              props.taskItem.name,
              props.taskItem.description,
              props.selectValueId
            );
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
          {...(props.isInvalid
            ? undefined
            : {
                disabled: false,
                style: { background: "#3F72AF" },
              })}
        >
          Создать
        </button>
      ) : (
        <button
          name="createCategorieButton"
          type="submit"
          disabled={true}
          style={{ background: "#adbad3", cursor: "default" }}
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateCategory);
            addCategory(
              props.categoryItem.name,
              props.categoryItem.description
            );
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
          {...(props.isInvalid
            ? undefined
            : {
                disabled: false,
                style: { background: "#3F72AF" },
              })}
        >
          Создать
        </button>
      )}
    </>
  );
};

export default CreateButton;
