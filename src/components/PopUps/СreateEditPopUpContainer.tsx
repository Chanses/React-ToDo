import React, { useRef, useState } from "react";
import { addTask } from "../../dbService";
import { ModalState } from "../../AppContainer";
import CreateEditPopUp from "./CreateEditPopUp";

interface ICreateEditPopUpContainer {
  setItemNameValue: (name: string) => void;
  setItemDescriptionValue: (name: string) => void;
  setModalState: ({}: ModalState) => void;
  itemNameValue: string;
  itemDescriptionValue: string;
  modalState: ModalState;
}

const СreateEditPopUpContainer: React.FC<ICreateEditPopUpContainer> = (
  props
) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();

  const dirtyHandler = () => {
    setIsDirty(true);
    name.length > 0 ? setIsInvalid(false) : setIsInvalid(true);
  };
  const handlerDescriptionInput = () => {
    setDescription(descriptionInput?.current?.value);
  };

  const handlerNameInput = () => {
    setIsDirty(true);
    setName(nameInput?.current?.value);
    name.length > -1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <CreateEditPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      name={name}
      description={description}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      setName={setName}
      setDescription={setDescription}
      addTask={addTask}
      dirtyHandler={dirtyHandler}
      handlerDescriptionInput={handlerDescriptionInput}
      handlerNameInput={handlerNameInput}
    />
  );
};

export default СreateEditPopUpContainer;
