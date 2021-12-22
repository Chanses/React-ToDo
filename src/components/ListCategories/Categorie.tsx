import React from "react";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ICategoryItem, ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";

export interface ICategorie {
  id: string;
  name: string;
  description: string;
  categoryItem: ICategoryItem;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setItemId: (id: string) => void;
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
}

const Categorie = (props: ICategorie) => {
  return (
    <div className="CategoriesWrapper">
      <div className="TaskWrapper__Info">
        <div className="TaskWrapper__Info__Name">
          <div className="TaskWrapper__Info__Name-name">{props.name}</div>
        </div>
        <div className="TaskWrapper__Info__Description">
          {props.description}
        </div>
      </div>
      <div className="TaskWrapper__Actions">
        <button
          className="TaskWrapper__Actions-Edit"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenEditCategory);
            props.setCategoryItem({
              ...props.categoryItem,
              id: props.id,
              name: props.name,
              description: props.description,
            });
            props.setItemId(props.id);
            props.setName(props.name);
            props.setDescription(props.description);
          }}
        >
          <img src={editImg} alt="" />
        </button>
        <button
          className="TaskWrapper__Actions-Delete"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenDeleteCategory);
            props.setCategoryItem({
              ...props.categoryItem,
              id: props.id,
              name: props.name,
            });
            props.setItemId(props.id);
            props.setName(props.name);
          }}
        >
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Categorie;
