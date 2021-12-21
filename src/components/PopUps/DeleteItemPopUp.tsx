import React from "react";
import { ModalState } from "../../AppContainer";
import { modalEntityType } from "../../models/enum/modalEntityType";
import { modalStateValues } from "../../models/modalStateValues";

interface IDeletePopUp {
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  modalState: ModalState;
  section: boolean;
  itemId: string;
  name: string;
}

const DeleteItemPopUp: React.FC<IDeletePopUp> = (props) => {
  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article-Name">
          Удаление{" "}
          {props.modalState.createEditModal.entityType ===
          modalEntityType.TASK ? (
            <span> задачи </span>
          ) : (
            <span> категории </span>
          )}{" "}
        </div>
        <div className="PopUp__Main-small" style={{ color: "black" }}>
          <div className="PopUp__Main-Description-small">
            Вы уверены, что хотите удалить
            {props.section ? (
              <span> задачу “{props.name}”?</span>
            ) : (
              <span> категорию “{props.name}”?</span>
            )}{" "}
          </div>
          <div className="PopUp__buttons">
            <div className="PopUp__buttons-create">
              {props.section ? (
                <button
                  name="Задачи"
                  type="submit"
                  onClick={() => {
                    props.deleteTask(props.itemId);
                    props.setModalState(modalStateValues.CloseSave.DeleteTask);
                    props.setName("");
                    props.setDescription("");
                  }}
                >
                  Да
                </button>
              ) : (
                <button
                  name="Категории"
                  type="submit"
                  onClick={() => {
                    props.deleteCategorie(props.itemId);
                    props.setModalState(
                      modalStateValues.CloseSave.DeleteCategory
                    );
                    props.setName("");
                    props.setDescription("");
                  }}
                >
                  Да
                </button>
              )}{" "}
            </div>
            <div className="PopUp__buttons-close">
              <button
                type="submit"
                onClick={() => {
                  props.setModalState(
                    modalStateValues.CloseDontSave.CloseDeleteCategory
                  );
                  props.setModalState(
                    modalStateValues.CloseDontSave.CloseDeleteTask
                  );
                  props.setName("");
                  props.setDescription("");
                }}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemPopUp;
