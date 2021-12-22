import React from "react";
import { ModalState } from "../../AppContainer";
import { modalEntityType } from "../../models/enum/modalEntityType";
import { ICategoryItem } from "../ListCategories/Categorie";
import { ITaskItem } from "../ListTasks/Task";
import CloseDeletePopUpButton from "./Buttons/CloseDeletePopUpButton";
import DeleteCategoryButton from "./Buttons/DeleteCategoryButton";
import DeleteTaskButton from "./Buttons/DeleteTaskButton";

interface IDeletePopUp {
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  section: boolean;
}

const DeleteItemPopUp = (props: IDeletePopUp) => {
  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article-Name">
          Удаление
          {props.modalState.createEditModal.entityType ===
          modalEntityType.TASK ? (
            <span> задачи </span>
          ) : (
            <span> категории </span>
          )}
        </div>
        <div className="PopUp__Main-small" style={{ color: "black" }}>
          <div className="PopUp__Main-Description-small">
            Вы уверены, что хотите удалить
            {props.section ? (
              <span> задачу “{props.taskItem.name}”?</span>
            ) : (
              <span> категорию “{props.categoryItem.name}”?</span>
            )}
          </div>
          <div className="PopUp__buttons">
            <div className="PopUp__buttons-create">
              {props.section ? (
                <DeleteTaskButton {...props} />
              ) : (
                <DeleteCategoryButton {...props} />
              )}
            </div>
            <div className="PopUp__buttons-close">
              <CloseDeletePopUpButton {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemPopUp;
