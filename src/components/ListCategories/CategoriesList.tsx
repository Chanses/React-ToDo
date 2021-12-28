import React from "react";
import "./CategoriesStyles.css";
import Category from "./Category";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ModalState } from "../../AppContainer";

interface ICategoriesList {
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategoryItem[];
  onEdit: (category: ICategoryItem) => void;
  onDelete: (category: ICategoryItem) => void;
}

const CategoriesList = (props: ICategoriesList) => {
  return (
    <div>
      {props.categorieList?.map((category, index) => (
        <Category {...props} category={category} key={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
