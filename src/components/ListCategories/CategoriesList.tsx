import React from "react";
import "./CategoriesStyles.css";
import Categorie, { ICategorie } from "./Categorie";
import { ModalState } from "../../AppContainer";

interface ICategoriesList {
  setModalState: (state: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  categorieList?: ICategorie[];
  setItemId: (id: string) => void;
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
