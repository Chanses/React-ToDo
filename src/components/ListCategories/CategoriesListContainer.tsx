import React from "react";
import { ICategorie } from "./Categorie";
import CategoriesList from "./CategoriesList";

import { ModalState } from "../../AppContainer";

interface ICategoriesListContainer {
  setItemId: (id: string) => void;
  setModalState: (state: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  categorieList?: ICategorie[];
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  return <CategoriesList {...props} />;
};

export default CategoriesListContainer;
