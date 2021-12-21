import React, { useRef, useState } from "react";
import { ICategorie } from "../../ListCategories/Categorie";

interface ISelectPopUp {
  categorieList?: ICategorie[];
  selectValue: string;
  handleSelect: () => void;
}

const SelectPopUp = (props: ISelectPopUp) => {
  return (
    <select
      name="categories"
      id=""
      value={props.selectValue}
      onChange={props.handleSelect}
    >
      <option
        style={{ display: "none" }}
        value="placeholdrer"
        selected
        disabled
      >
        Выберите категорию
      </option>
      {props.categorieList?.map((category, index) => (
        <option value={category.name} key={index}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SelectPopUp;
