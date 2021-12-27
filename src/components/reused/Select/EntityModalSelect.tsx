import React from "react";

import { IBaseEntityModel } from "../../../models/IBaseEntityModel";

interface IEntityModalSelect<T extends IBaseEntityModel> {
  options: T[];
  defaultValue: string;
  selectRef: any;
  getItem: (item: T) => { key: any; name: string };
  onChange: () => void;
}

const EntityModalSelect = <T extends IBaseEntityModel>(
  props: IEntityModalSelect<T>
) => {
  return (
    <select
      name="categories"
      id=""
      ref={props.selectRef}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
    >
      <option value="placehodler" style={{ display: "none" }}>
        Выберите категорию
      </option>
      {props.options.map((option) => {
        const { key, name } = props.getItem(option);
        return (
          <option key={key} id={key}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default EntityModalSelect;
