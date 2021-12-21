import React, { useRef, useState } from "react";
import { addTask, editTask, editCategory } from "../../dbService";
import { ModalState } from "../../AppContainer";
import CreateEditPopUp from "./CreateEditPopUp";
import { ICategorie } from "../ListCategories/Categorie";

interface ICreateEditPopUpContainer {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setModalState: (state: ModalState) => void;
  name: string;
  description: string;
  itemId: string;
  modalState: ModalState;
  categorieList?: ICategorie[];
}

const СreateEditPopUpContainer = (props: ICreateEditPopUpContainer) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();
  const [selectValueId, setSelectValueId] = useState<string>("placeholder");

  const handleSelect = (event?: any) => {
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    setSelectValueId(optionElementId);
  };
  const handlerDescriptionInput = () => {
    props.setDescription(descriptionInput?.current?.value);
  };

  const dirtyHandler = () => {
    setIsDirty(true);
    props.name.length > 1 && props.name.length < 256
      ? setIsInvalid(false)
      : setIsInvalid(true);
  };

  const handlerNameInput = () => {
    setIsDirty(true);
    props.setName(nameInput?.current?.value);
    props.name.length > 1 && props.name.length < 256
      ? setIsInvalid(false)
      : setIsInvalid(true);
  };

  return (
    <CreateEditPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      description={props.description}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      selectValueId={selectValueId}
      addTask={addTask}
      editTask={editTask}
      editCategory={editCategory}
      dirtyHandler={dirtyHandler}
      handlerDescriptionInput={handlerDescriptionInput}
      handlerNameInput={handlerNameInput}
      setSelectValueId={setSelectValueId}
      handleSelect={handleSelect}
    />
  );
};

export default СreateEditPopUpContainer;
