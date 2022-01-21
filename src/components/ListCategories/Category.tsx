import React from "react";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ICategoryItem } from "../../models/ICategoryItem";
import ImgButton from "../ImgButton";

export interface ICategoryProps {
  category: ICategoryItem;
  onEdit: (category: ICategoryItem) => void;
  onDelete: (category: ICategoryItem) => void;
}

const Category = (props: ICategoryProps) => {
  return (
    <div className="CategoriesWrapper">
      <div className="CategoryWrapper__Info">
        <div className="CategoryWrapper__Info__Name">
          <div className="CategoryWrapper__Info__Name-name">
            {props.category.name}
          </div>
        </div>
        <div className="CategoryWrapper__Info__Description">
          {props.category.description}
        </div>
      </div>
      <div className="CategoryWrapper__Actions">
        <ImgButton
          className="CategoryWrapper__Actions-Edit"
          onClick={() => props.onEdit(props.category)}
          img={editImg}
        />
        <ImgButton
          className="CategoryWrapper__Actions-Delete"
          onClick={() => {
            props.onDelete(props.category);
          }}
          img={deleteImg}
        />
      </div>
    </div>
  );
};

export default Category;
