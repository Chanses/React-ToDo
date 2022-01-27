import React, { useRef } from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import Select from "../Select";
import CategoryStore from "../../stores/CategoryStore";

interface IEntityModalSelectContainer {
  setSelectId: (id: string) => void;
  selectedId: string;
}

const EntityModalSelectContainer = (props: IEntityModalSelectContainer) => {
  const selectRef = useRef<any>();
  const onChangeSelect = () => {
    const index = selectRef.current!.selectedIndex;
    const optionElement = selectRef.current.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    props.setSelectId(optionElementId.toString());
  };

  const defaultValue = CategoryStore.categoryList.find(
    (category) => category.id.toString() === props.selectedId
  )?.name;

  const getItem = ({ name, id: key }: ICategoryItem) => ({ name, key });

  return (
    <Select
      selectRef={selectRef}
      options={CategoryStore.categoryList || []}
      onChange={onChangeSelect}
      getItem={getItem}
      defaultValue={defaultValue || "Выберите категорию"}
    />
  );
};

export default EntityModalSelectContainer;
