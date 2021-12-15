import React from "react";

interface ICreateNewTaskButton {
  toggleCreateTaskPopUp: () => void;
  toogleEditHandlerCreate: () => void;
}

const CreateNewTaskButton: React.FC<ICreateNewTaskButton> = (props) => {
  return (
    <>
      <button
        className="Header__AddNewTask"
        onClick={() => {
          props.toggleCreateTaskPopUp();
          props.toogleEditHandlerCreate();
        }}
      >
        Добавить задачу
      </button>
    </>
  );
};

export default CreateNewTaskButton;
