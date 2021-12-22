import React, { useRef, useState } from "react";
import { addTask, editTask, editCategory } from "../../dbService";
import { ICategoryItem, ITaskItem, ModalState } from "../../AppContainer";
import CreateEditPopUp from "./CreateEditPopUp";
import { ICategorie } from "../ListCategories/Categorie";

interface ICreateEditPopUpContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  categorieList?: ICategorie[];
}

const СreateEditPopUpContainer = (props: ICreateEditPopUpContainer) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const [selectValueId, setSelectValueId] = useState<string>("placeholder");
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();
  const selectRef = useRef<any>();

  const handleSelect = () => {
    const index = selectRef.current.selectedIndex;
    const optionElement = selectRef.current.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    setSelectValueId(optionElementId);
  };

  const handlerDescriptionInput = () => {
    props.setTaskItem({
      ...props.taskItem,
      description: descriptionInput?.current?.value,
    });
    props.setCategoryItem({
      ...props.categoryItem,
      description: descriptionInput?.current?.value,
    });
  };
  const handlerNameInput = () => {
    setIsDirty(true);
    props.setTaskItem({ ...props.taskItem, name: nameInput?.current?.value });
    props.setCategoryItem({
      ...props.categoryItem,
      name: nameInput?.current?.value,
    });
    (props.taskItem.name.length || props.categoryItem.name.length) > 1 &&
    (props.taskItem.name.length || props.categoryItem.name.length) < 256
      ? setIsInvalid(false)
      : setIsInvalid(true);
  };

  const dirtyHandler = () => {
    setIsDirty(true);
    (props.taskItem.name.length || props.categoryItem.name.length) > 1 &&
    (props.taskItem.name.length || props.categoryItem.name.length) < 256
      ? setIsInvalid(false)
      : setIsInvalid(true);
  };

  return (
    <CreateEditPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      nameInput={nameInput}
      selectRef={selectRef}
      descriptionInput={descriptionInput}
      selectValueId={selectValueId}
      isChanged={isChanged}
      addTask={addTask}
      editTask={editTask}
      editCategory={editCategory}
      dirtyHandler={dirtyHandler}
      handlerDescriptionInput={handlerDescriptionInput}
      handlerNameInput={handlerNameInput}
      handleSelect={handleSelect}
      setIsChanged={setIsChanged}
    />
  );
};

export default СreateEditPopUpContainer;
