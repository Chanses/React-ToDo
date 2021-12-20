import React from "react";
import "./CategoriesStyles.css";
import Categorie, { ICategorie } from "./Categorie";
import { ModalState } from "../../AppContainer";

interface ICategoriesList {
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  categorieList?: ICategorie[];
  setItemId: (id: string) => void;
}

const CategoriesList: React.FC<ICategoriesList> = (props) => {
  return (
    <div>
      {props.categorieList?.map((categorie, index) => (
        <Categorie {...props} {...categorie} key={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
