import React from "react";
import { ModalState } from "../../AppContainer";
import { modalEntityType } from "../../models/enum/modalEntityType";
import { modalStateValues } from "../../models/modalStateValues";

interface IDeletePopUp {
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  setModalState: ({}: ModalState) => void;
  modalState: ModalState;
  section: boolean;
  itemId: string;
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
              <span> задачу “Задача1”?</span>
            ) : (
              <span> категорию “Категория1”?</span>
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
