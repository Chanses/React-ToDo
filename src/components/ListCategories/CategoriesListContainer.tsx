import React from "react";
import { ICategorie, ICategoryItem } from "./Categorie";
import CategoriesList from "./CategoriesList";
import { ModalState } from "../../AppContainer";

interface ICategoriesListContainer {
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategorie[];
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  return <CategoriesList {...props} />;
};

export default CategoriesListContainer;
