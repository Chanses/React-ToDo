import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalStateValues } from "../../../models/modalStateValues";

interface IDeleteCategoryButton {
  setModalState: (state: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  deleteCategorie: (id: string) => void;
  modalState: ModalState;
  itemId: string;
}

const DeleteCategoryButton = (props: IDeleteCategoryButton) => {
  return (
    <button
      name="Категории"
      type="submit"
      onClick={() => {
        props.deleteCategorie(props.itemId);
        props.setModalState(modalStateValues.CloseSave.DeleteCategory);
        props.setName("");
        props.setDescription("");
      }}
    >
      Да
    </button>
  );
};

export default DeleteCategoryButton;
