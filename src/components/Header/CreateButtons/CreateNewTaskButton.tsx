import React from "react";

interface popUpProps {
  toggleCreateTaskPopUp: () => void;
  toogleEditHandlerCreate: () => void;
}

const CreateNewTaskButton: React.FC<popUpProps> = (props) => {
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
