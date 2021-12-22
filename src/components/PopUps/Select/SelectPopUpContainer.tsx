import React from "react";
import { ModalState } from "../../../AppContainer";
import { ICategorie } from "../../ListCategories/Categorie";
import { ITaskItem } from "../../ListTasks/Task";
import SelectPopUp from "./SelectPopUp";

interface ISelectPopUpContainer {
  categorieList?: ICategorie[];
  modalState: ModalState;
  taskItem: ITaskItem;
  selectRef: any;
  selectValueId: string;
  handleSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
}

const SelectPopUpContainer = (props: ISelectPopUpContainer) => {
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

  return <SelectPopUp {...props} value={value} />;
};

export default SelectPopUpContainer;
