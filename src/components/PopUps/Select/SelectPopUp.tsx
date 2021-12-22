import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalActionsType } from "../../../models/enum/modalActionsType";

import { ICategorie } from "../../ListCategories/Categorie";
import { ITaskItem } from "../../ListTasks/Task";

interface ISelectPopUp {
  categorieList?: ICategorie[];
  modalState: ModalState;
  taskItem: ITaskItem;
  selectRef: any;
  selectValueId: string;
  handleSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;

  value: { name: string; id: string };
}

const SelectPopUp = (props: ISelectPopUp) => {
  return (
    <select
      name="categories"
      id=""
      ref={props.selectRef}
      onChange={() => {
        props.handleSelect();
        props.setIsChanged(true);
      }}
    >
      {props.modalState.createEditModal.action === modalActionsType.CREATE ? (
        <option
          id="0"
          style={{ display: "none" }}
          value="placeholder"
          selected
          disabled
        >
          Выберете категорию
        </option>
      ) : (
        <option
          id={props.value.id}
          value={props.value.name}
          selected
          disabled
          style={{ display: "none" }}
        >
          {props.value.name}
        </option>
      )}

      {props.categorieList?.map((category, index) => (
        <option value={category.name} key={index} id={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SelectPopUp;
