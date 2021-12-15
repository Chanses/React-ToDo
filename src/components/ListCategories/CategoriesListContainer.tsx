import React from "react";
import CategoriesList from "./CategoriesList";

interface ICategoriesListContainer {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
}

const CategoriesListContainer: React.FC<ICategoriesListContainer> = (props) => {
  return <CategoriesList {...props} />;
};

export default CategoriesListContainer;
