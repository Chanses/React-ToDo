import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalActionsType } from "../../../models/enum/modalActionsType";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { ITaskItem } from "../../../models/ITaskItem";
import IEntityModalSelect from "../../reused/Select/EntityModalSelect";

interface IEntityModalSelectContainer {
  categorieList?: ICategoryItem[];
  modalState: ModalState;
  taskItem: ITaskItem;
  selectRef: any;
  selectValueId: string;
  handleSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
}

const EntityModalSelectContainer = (props: IEntityModalSelectContainer) => {
  const handleSelect = () => {
    props.handleSelect();
    props.setIsChanged(true);
  };

  const defaultValue =
    props.modalState.createEditModal.action === modalActionsType.CREATE
      ? "placeholder"
      : props.categorieList?.find(
          (category) => category.id.toString() === props.taskItem.categoryId
        )?.name;

  const getItem = ({ name, id: key }: ICategoryItem) => ({ name, key });

  return (
    <IEntityModalSelect
      {...props}
      options={props.categorieList || []}
      onChange={handleSelect}
      getItem={getItem}
      defaultValue={defaultValue || ""}
    />
  );
};

export default EntityModalSelectContainer;
