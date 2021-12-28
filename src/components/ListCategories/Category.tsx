import React from "react";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ICategoryItem } from "../../models/ICategoryItem";
import ImgButton from "../ImgButton";

export interface ICategorieProps extends ICategoryItem {
  openEditModal: (id: string, name: string, description?: string) => void;
  openDeleteModal: (id: string, name: string) => void;
}

const Category = (props: ICategorieProps) => {
  return (
    <div className="CategoriesWrapper">
      <div className="CategoryWrapper__Info">
        <div className="CategoryWrapper__Info__Name">
          <div className="CategoryWrapper__Info__Name-name">{props.name}</div>
        </div>
        <div className="CategoryWrapper__Info__Description">
          {props.description}
        </div>
      </div>
      <div className="CategoryWrapper__Actions">
        <ImgButton
          className="CategoryWrapper__Actions-Edit"
          onClick={() =>
            props.openEditModal(props.id, props.name, props.description)
          }
          img={editImg}
        />
        <ImgButton
          className="CategoryWrapper__Actions-Delete"
          onClick={() => props.openDeleteModal(props.id, props.name)}
          img={deleteImg}
        />
      </div>
    </div>
  );
};

export default Category;
