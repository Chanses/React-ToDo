import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { ITaskItem } from "../../../models/ITaskItem";
import { modalStateValues } from "../../../models/modalStateValues";
import ConfirmModal from "./ConfirmModal";

interface IConfirmModalContainer {
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
}

const ConfirmModalContainer = (props: IConfirmModalContainer) => {
  const confirmDeleteTask = () => {
    props.deleteTask(props.taskItem.id);
    props.setModalState(modalStateValues.CloseSave.DeleteTask);
    props.setTaskItem({
      ...props.taskItem,
      name: "",
      description: "",
    });
  };
  const confirmDeleteCategory = () => {
    props.deleteCategorie(props.categoryItem.id);
    props.setModalState(modalStateValues.CloseSave.DeleteCategory);
    props.setCategoryItem({
      ...props.categoryItem,
      name: "",
      description: "",
    });
  };
  const closeModal = () => {
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
  };
  const ConfirmModalValues = {
    ConfirmModalText:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "Вы уверены, что хотите удалить задачу “" + props.taskItem.name + "”?"
        : "Вы уверены, что хотите удалить категорию “" +
          props.categoryItem.name +
          "”?",
    ConfirmModalTitleValue:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "Удаление задачи"
        : "Удаление категории",
  };
  const onDeleteButtonClick = () => {
    if (props.modalState.createEditModal.entityType === modalEntityType.TASK)
      confirmDeleteTask();
    else confirmDeleteCategory();
  };

  return (
    <ConfirmModal
      {...props}
      closeModal={closeModal}
      onDeleteButtonClick={onDeleteButtonClick}
      ConfirmModalValues={ConfirmModalValues}
    />
  );
};

export default ConfirmModalContainer;
