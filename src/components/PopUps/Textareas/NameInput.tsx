import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";

interface IInputs {
  modalState: ModalState;
  name: string;
  nameInput: () => void;
  handlerNameInput: () => void;
}
const NameInput = (props: IInputs) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <input
          type="text"
          id="namefield"
          placeholder="Введите имя задачи"
          ref={props.nameInput}
          value={props.name}
          onChange={props.handlerNameInput}
        />
      ) : (
        <input
          type="text"
          id="namefield"
          placeholder="Введите имя категории"
          style={{ width: "calc(200% + 12px)" }}
          value={props.name}
          ref={props.nameInput}
          onChange={props.handlerNameInput}
        />
      )}
    </>
  );
};

export default NameInput;

// <input
// type="text"
// id="namefield"
// placeholder="Введите имя задачи"
// onFocus={props.dirtyHandler}
// onChange={props.handlerNameInput}
// ref={props.nameInput}
// style={
//   props.isDirty && props.isInvalid ? invalidBorderStyle : {}
// }
// />
