import React from "react";
interface ICreateNewCategorieButton {
  toggleCreateCategoriePopUp: () => void;
  toogleEditHandlerCreate: () => void;
}

const CreateNewCategorieButton: React.FC<ICreateNewCategorieButton> = (
  props
) => {
  return (
    <>
      <button
        className="Header__AddNewTask"
        onClick={() => {
          props.toggleCreateCategoriePopUp();
          props.toogleEditHandlerCreate();
        }}
      >
        Добавить категорию
      </button>
    </>
  );
};

export default CreateNewCategorieButton;
