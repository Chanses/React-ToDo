import React from "react";
import "./CategoriesStyles.css";
import Categorie, { ICategorie } from "./Categorie";

interface ICategoriesList {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
  categorieList?: ICategorie[];
}

const CategoriesList: React.FC<ICategoriesList> = (props) => {
  return (
    <div>
      {props.categorieList?.map((categorie, index) => (
        <Categorie {...categorie} key={index} />
      ))}
    </div>
  );
};

export default CategoriesList;