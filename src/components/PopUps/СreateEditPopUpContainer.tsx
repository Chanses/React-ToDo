import React, { useRef, useState } from "react";
import { addTask, editTask, editCategory } from "../../dbService";
import { ModalState } from "../../AppContainer";
import CreateEditPopUp from "./CreateEditPopUp";

interface ICreateEditPopUpContainer {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setModalState: ({}: ModalState) => void;
  name: string;
  description: string;
  itemId: string;
  modalState: ModalState;
}

const СreateEditPopUpContainer: React.FC<ICreateEditPopUpContainer> = (
  props
) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();

  const dirtyHandler = () => {
    setIsDirty(true);
    props.name.length > 0 ? setIsInvalid(false) : setIsInvalid(true);
  };
  const handlerDescriptionInput = () => {
    props.setDescription(descriptionInput?.current?.value);
  };

  const handlerNameInput = () => {
    setIsDirty(true);
    props.setName(nameInput?.current?.value);
    props.name.length > -1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <CreateEditPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      description={props.description}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      addTask={addTask}
      editTask={editTask}
      editCategory={editCategory}
      dirtyHandler={dirtyHandler}
      handlerDescriptionInput={handlerDescriptionInput}
      handlerNameInput={handlerNameInput}
    />
  );
};

export default СreateEditPopUpContainer;
