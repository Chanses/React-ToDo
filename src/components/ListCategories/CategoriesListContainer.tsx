import React, { useEffect, useState } from "react";
import { ICategorie } from "./Categorie";
import CategoriesList from "./CategoriesList";
import { getCategories } from "../../dbService";
import { ModalState } from "../../AppContainer";

interface ICategoriesListContainer {
  setItemId: (id: string) => void;
  setModalState: ({}: ModalState) => void;
  categorieList?: ICategorie[];
}

const CategoriesListContainer: React.FC<ICategoriesListContainer> = (props) => {
  return <CategoriesList {...props} categorieList={props.categorieList} />;
};

export default CategoriesListContainer;
