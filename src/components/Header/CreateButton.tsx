import React from "react";

interface ICreateNewCategorieButton {
  toggleCreateCategoriePopUp: () => void;
  toogleEditHandlerCreate: () => void;
  toggleCreateTaskPopUp: () => void;
  section: boolean;
}

const CreateNewCategorieButton: React.FC<ICreateNewCategorieButton> = (
  props
) => {
  return (
    <>
      {!props.section ? (
        <button
          className="Header__AddNewTask"
          onClick={() => {
            props.toggleCreateCategoriePopUp();
            props.toogleEditHandlerCreate();
          }}
        >
          Добавить категорию
        </button>
      ) : (
        <button
          className="Header__AddNewTask"
          onClick={() => {
            props.toggleCreateTaskPopUp();
            props.toogleEditHandlerCreate();
          }}
        >
          Добавить задачу
        </button>
      )}
    </>
  );
};

export default CreateNewCategorieButton;
