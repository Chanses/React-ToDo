import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { ICategoryItem } from "../../ListCategories/Categorie";
import { ITaskItem } from "../../ListTasks/Task";
interface IInputs {
  modalState: ModalState;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  handlerCategoryDescriptionInput: () => void;
  descriptionInput: () => void;
  handlerTaskDescriptionInput: () => void;
  handleSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
}
const TaskTextarea = (props: IInputs) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <textarea
          className="description"
          placeholder="Введите описание задачи"
          value={props.taskItem.description}
          onChange={() => {
            props.handlerTaskDescriptionInput();
            props.setIsChanged(true);
            props.handleSelect();
          }}
          onFocus={props.handleSelect}
          ref={props.descriptionInput}
        />
      ) : (
        <textarea
          className="description"
          placeholder="Введите описание категории"
          value={props.categoryItem.description}
          onChange={props.handlerCategoryDescriptionInput}
          ref={props.descriptionInput}
        />
      )}
    </>
  );
};

export default TaskTextarea;
