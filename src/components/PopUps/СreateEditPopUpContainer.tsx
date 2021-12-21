import React, { useRef, useState } from "react";
import { addTask, editTask, editCategory } from "../../dbService";
import { ModalState } from "../../AppContainer";
import CreateEditPopUp from "./CreateEditPopUp";
import { ICategorie } from "../ListCategories/Categorie";

interface ICreateEditPopUpContainer {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setModalState: ({}: ModalState) => void;
  name: string;
  description: string;
  itemId: string;
  modalState: ModalState;
  categorieList?: ICategorie[];
}

const СreateEditPopUpContainer: React.FC<ICreateEditPopUpContainer> = (
  props
) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();
  const [selectValue, setSelectValue] = useState<string>("placeholder");

  const handleSelect = (event?: any) => {
    setSelectValue(event?.target?.value);
  };
  const handlerDescriptionInput = () => {
    props.setDescription(descriptionInput?.current?.value);
  };

  const dirtyHandler = () => {
    setIsDirty(true);
    props.name.length > 1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  const handlerNameInput = () => {
    setIsDirty(true);
    props.setName(nameInput?.current?.value);
    props.name.length > 1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <CreateEditPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      description={props.description}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      selectValue={selectValue}
      addTask={addTask}
      editTask={editTask}
      editCategory={editCategory}
      dirtyHandler={dirtyHandler}
      handlerDescriptionInput={handlerDescriptionInput}
      handlerNameInput={handlerNameInput}
      setSelectValue={setSelectValue}
      handleSelect={handleSelect}
    />
  );
};

export default СreateEditPopUpContainer;
