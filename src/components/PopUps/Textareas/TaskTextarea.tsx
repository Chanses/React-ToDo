import React from "react";
import { ICategoryItem, ITaskItem, ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
interface IInputs {
  modalState: ModalState;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  handlerDescriptionInput: () => void;
  descriptionInput: () => void;
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
            props.handlerDescriptionInput();
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
          onChange={props.handlerDescriptionInput}
          ref={props.descriptionInput}
        />
      )}
    </>
  );
};

export default TaskTextarea;
