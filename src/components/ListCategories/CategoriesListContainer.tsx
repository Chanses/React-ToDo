import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import { ModalState } from "../../AppContainer";

interface ICategoriesListContainer {
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategoryItem[];
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  return <CategoriesList {...props} />;
};

export default CategoriesListContainer;
