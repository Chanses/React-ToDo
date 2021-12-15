import React from "react";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";

interface ICategorie {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
}

const Categorie: React.FC<ICategorie> = (props) => {
  return (
    <div className="CategoriesWrapper">
      <div className="TaskWrapper__Info">
        <div className="TaskWrapper__Info__Name">
          <div className="TaskWrapper__Info__Name-name">Категория1</div>
        </div>
        <div className="TaskWrapper__Info__Description">
          Описание категории, может быть длинным
        </div>
      </div>
      <div className="TaskWrapper__Actions">
        <button
          className="TaskWrapper__Actions-Edit"
          onClick={() => {
            props.toggleTaskPopUp();
            props.toogleEditHandlerEdit();
          }}
        >
          {" "}
          <img src={editImg} alt="" />
        </button>
        <button
          className="TaskWrapper__Actions-Delete"
          onClick={props.toggleDeletePopUp}
        >
          {" "}
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Categorie;
