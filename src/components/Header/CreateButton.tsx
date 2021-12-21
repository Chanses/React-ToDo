import React from "react";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";

interface ICreateNewCategorieButton {
  setModalState: (state: ModalState) => void;
  section: boolean;
}

const CreateButton = (props: ICreateNewCategorieButton) => {
  return (
    <>
      {!props.section ? (
        <button
          className="Header__AddNewTask"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenCreateCategory);
          }}
        >
          Добавить категорию
        </button>
      ) : (
        <button
          className="Header__AddNewTask"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenCreateTask);
          }}
        >
          Добавить задачу
        </button>
      )}
    </>
  );
};

export default CreateButton;
