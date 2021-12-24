import React from "react";
import { ModalState } from "../../../../AppContainer";
import { modalActionsType } from "../../../../models/enum/modalActionsType";
import { ICategoryItem } from "../../../../models/ICategoryItem";
import { ITaskItem } from "../../../../models/ITaskItem";
import SelectPopUp from "./SelectPopUp";

interface ISelectPopUpContainer {
  categorieList?: ICategoryItem[];
  modalState: ModalState;
  taskItem: ITaskItem;
  selectRef: any;
  selectValueId: string;
  handleSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
}

const SelectPopUpContainer = (props: ISelectPopUpContainer) => {
  const handleSelect = () => {
    props.handleSelect();
    props.setIsChanged(true);
  };
  let value = {
    id: "",
    name: "",
  };

  for (const iterator of props.categorieList!) {
    if (iterator.id.toString() === props.taskItem.categoryId) {
      value.id = iterator.id;
      value.name = iterator.name;
    }
  }
  const selectValues = {
    selectId:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "0"
        : value.id,
    selectValue:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "placeholder"
        : value.name,
    selectTitle:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "Выберите категорию"
        : value.name,
  };

  return (
    <SelectPopUp
      {...props}
      onChange={handleSelect}
      id={selectValues.selectId}
      value={selectValues.selectValue}
      title={selectValues.selectTitle}
    />
  );
};

export default SelectPopUpContainer;
