import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";

interface IInputs {
  nameInput: () => void;
  handlerNameInput: () => void;
  dirtyHandler: () => void;
  modalState: ModalState;
  name: string;
  isDirty: boolean;
  isInvalid: boolean;
}
const NameInput = (props: IInputs) => {
  let invalidBorderStyle = { border: "2px red solid" };
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
