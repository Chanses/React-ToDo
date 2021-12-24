import React from "react";
import "./CategoriesStyles.css";
import Categorie from "./Categorie";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ModalState } from "../../AppContainer";

interface ICategoriesList {
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategoryItem[];
}

const CategoriesList = (props: ICategoriesList) => {
  return (
    <div>
      {props.categorieList?.map((categorie, index) => (
        <Categorie {...props} {...categorie} key={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
