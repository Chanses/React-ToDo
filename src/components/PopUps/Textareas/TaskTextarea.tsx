import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
interface IInputs {
  modalState: ModalState;
  description: string;
  handlerDescriptionInput: () => void;
  descriptionInput: () => void;
}
const TaskTextarea = (props: IInputs) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <textarea
          className="description"
          placeholder="Введите описание задачи"
          value={props.description}
          onChange={props.handlerDescriptionInput}
          ref={props.descriptionInput}
        />
      ) : (
        <textarea
          className="description"
          placeholder="Введите описание категории"
          value={props.description}
          onChange={props.handlerDescriptionInput}
          ref={props.descriptionInput}
        />
      )}
    </>
  );
};

export default TaskTextarea;
