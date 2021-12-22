import React from "react";
import { ICategoryItem, ITaskItem, ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";

interface IInputs {
  nameInput: () => void;
  handlerNameInput: () => void;
  dirtyHandler: () => void;
  setIsChanged: (isChanged: boolean) => void;
  handleSelect: () => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  isDirty: boolean;
  isInvalid: boolean;
}
const NameInput = (props: IInputs) => {
  const invalidBorderStyle = { border: "2px red solid" };
  const validCategoryStyle = { width: "calc(200% + 12px)" };
  const invalidCategoryStyle = {
    border: "2px red solid",
    width: "calc(200% + 12px)",
  };
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <input
          type="text"
          id="namefield"
          placeholder="Введите имя задачи"
          ref={props.nameInput}
          value={props.taskItem.name}
          onChange={() => {
            props.handlerNameInput();
            props.setIsChanged(true);
            props.handleSelect();
          }}
          onFocus={props.dirtyHandler}
          style={
            props.isDirty && props.isInvalid ? invalidBorderStyle : undefined
          }
        />
      ) : (
        <input
          type="text"
          id="namefield"
          placeholder="Введите имя категории"
          value={props.categoryItem.name}
          ref={props.nameInput}
          onChange={props.handlerNameInput}
          onFocus={props.dirtyHandler}
          style={
            props.isDirty && props.isInvalid
              ? invalidCategoryStyle
              : validCategoryStyle
          }
        />
      )}
    </>
  );
};

export default NameInput;
