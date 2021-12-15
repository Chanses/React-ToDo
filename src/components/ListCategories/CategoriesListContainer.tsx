import React, { useEffect, useState } from "react";
import { ICategorie } from "./Categorie";
import CategoriesList from "./CategoriesList";
import { getCategories } from "../../dbService";

interface ICategoriesListContainer {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
}

const CategoriesListContainer: React.FC<ICategoriesListContainer> = (props) => {
  const [categorieList, setCategorieList] = useState<ICategorie[]>();
  const handleLoadCategorie = (categorie: ICategorie[]) =>
    setCategorieList(categorie);

  useEffect(() => {
    getCategories(handleLoadCategorie);
  }, []);

  return <CategoriesList {...props} categorieList={categorieList} />;
};

export default CategoriesListContainer;
