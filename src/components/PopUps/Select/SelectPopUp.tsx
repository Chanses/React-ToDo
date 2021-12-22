import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalActionsType } from "../../../models/enum/modalActionsType";
import { ICategorie } from "../../ListCategories/Categorie";

interface ISelectPopUp {
  categorieList?: ICategorie[];
  selectValueId: string;
  modalState: ModalState;
  handleSelect: () => void;
}

const SelectPopUp = (props: ISelectPopUp) => {
  return (
    <>
      {props.modalState.createEditModal.action === modalActionsType.CREATE ? (
        <select name="categories" id="" onChange={props.handleSelect}>
          <option
            id="0"
            style={{ display: "none" }}
            value="placeholder"
            selected
            disabled
          >
            Выберите категорию
          </option>
          {props.categorieList?.map((category, index) => (
            <option value={category.name} key={index} id={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      ) : (
        <select name="categories" onChange={props.handleSelect}>
          <option
            id="0"
            style={{ display: "none" }}
            value="placeholder"
            selected
            disabled
          >
            Выберите категорию
          </option>
          {props.categorieList?.map((category, index) => (
            <option value={category.name} key={index} id={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default SelectPopUp;
