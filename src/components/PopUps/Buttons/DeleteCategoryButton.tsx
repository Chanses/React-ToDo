import React from "react";
import { ICategoryItem, ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface IDeleteCategoryButton {
  setModalState: (state: ModalState) => void;
  deleteCategorie: (id: string) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  modalState: ModalState;
}

const DeleteCategoryButton = (props: IDeleteCategoryButton) => {
  return (
    <button
      name="Категории"
      type="submit"
      onClick={() => {
        props.deleteCategorie(props.categoryItem.id);
        props.setModalState(modalStateValues.CloseSave.DeleteCategory);
        props.setCategoryItem({
          ...props.categoryItem,
          name: "",
          description: "",
        });
      }}
    >
      Да
    </button>
  );
};

export default DeleteCategoryButton;
