import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalActionsType } from "../../../models/enum/modalActionsType";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { ITaskItem } from "../../../models/ITaskItem";
import Select from "../../Select";

interface IEntityModalSelectContainer {
  categorieList?: ICategoryItem[];
  modalState: ModalState;
  taskItem: ITaskItem;
  selectRef: any;
  selectValueId: string;
  onChangeSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
}

const EntityModalSelectContainer = (props: IEntityModalSelectContainer) => {
  const onChangeSelect = () => {
    props.onChangeSelect();
    props.setIsChanged(true);
  };

  const defaultValue =
    props.modalState.createEditModal.action === modalActionsType.CREATE
      ? "Выберите категорию"
      : props.categorieList?.find(
          (category) => category.id.toString() === props.taskItem.categoryId
        )?.name;

  const getItem = ({ name, id: key }: ICategoryItem) => ({ name, key });

  return (
    <Select
      selectRef={props.selectRef}
      options={props.categorieList || []}
      onChange={onChangeSelect}
      getItem={getItem}
      defaultValue={defaultValue || ""}
    />
  );
};

export default EntityModalSelectContainer;
