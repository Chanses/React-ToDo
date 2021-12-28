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
  openEditModal: (id: string, name: string, description?: string) => void;
  openDeleteModal: (id: string, name: string) => void;
}

const CategoriesList = (props: ICategoriesList) => {
  return (
    <div>
      {props.categorieList?.map((categorie, index) => (
        <Category {...props} {...categorie} key={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
