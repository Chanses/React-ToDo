import React from "react";

import { ICategoryItem } from "../../../../models/ICategoryItem";

interface ISelectPopUp {
  categorieList?: ICategoryItem[];
  selectRef: any;
  value: string;
  id: string;
  title: string;
  onChange: () => void;
}

const SelectPopUp = (props: ISelectPopUp) => {
  return (
    <select
      name="categories"
      id=""
      ref={props.selectRef}
      onChange={props.onChange}
    >
      <option
        id={props.id}
        value={props.value}
        selected
        disabled
        style={{ display: "none" }}
      >
        {props.title}
      </option>

      {props.categorieList?.map((category, index) => (
        <option value={category.name} key={index} id={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SelectPopUp;
