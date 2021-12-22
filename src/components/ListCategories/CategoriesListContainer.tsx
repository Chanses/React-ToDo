import React from "react";
import { ICategorie } from "./Categorie";
import CategoriesList from "./CategoriesList";

import { ICategoryItem, ModalState } from "../../AppContainer";

interface ICategoriesListContainer {
  setItemId: (id: string) => void;
  setModalState: (state: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategorie[];
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  return <CategoriesList {...props} />;
};

export default CategoriesListContainer;
