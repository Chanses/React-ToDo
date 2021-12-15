import React from "react";
import "./CategoriesStyles.css";
import Categorie from "./Categorie";

interface TaskActionsPopUp {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
}

const CategoriesList: React.FC<TaskActionsPopUp> = (props) => {
  return (
    <div>
      <Categorie {...props} />
    </div>
  );
};

export default CategoriesList;
