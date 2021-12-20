import React from "react";
import "./StylePopUp.css";
import closeImg from "../../images/Close.svg";
import CreateButton from "./Buttons/CreateButton";
import SaveButton from "./Buttons/SaveButton";
import CloseButton from "./Buttons/CloseButton";
import TaskTextarea from "./Textareas/TaskTextarea";
import PopUpSelect from "./Select/PopUpSelect";
import NameInput from "./Textareas/NameInput";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import { modalActionsType } from "../../models/enum/modalActionsType";
import { modalEntityType } from "../../models/enum/modalEntityType";

interface ICreateEditPopUp {
  handlerDescriptionInput: () => void;
  dirtyHandler: () => void;
  addTask: (name: string, description?: string, categorie?: string) => void;
  handlerNameInput: () => void;
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  modalState: ModalState;
  isDirty: boolean;
  isInvalid: boolean;
  name: string;
  description: string;
  nameInput: any;
  descriptionInput: any;
}

const CreateEditPopUp: React.FC<ICreateEditPopUp> = (props) => {
  let invalidBorderStyle = { border: "2px red solid" };
  let invalidTextStyle = { color: "red" };

  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article">
          <div className="PopUp__Article-Name ">
            {props.modalState.createEditModal.action ===
            modalActionsType.CREATE ? (
              <span>Создать</span>
            ) : (
              <span>Редактировать</span>
            )}
            {props.modalState.createEditModal.entityType ===
            modalEntityType.TASK ? (
              <span> задачу</span>
            ) : (
              <span> категорию</span>
            )}
          </div>
          <button className="PopUp__Article-Close">
            <img
              src={closeImg}
              alt=""
              onClick={() => {
                props.setModalState(modalStateValues.CloseSave.CreateCategory);
                props.setModalState(
                  modalStateValues.CloseDontSave.CloseCreateTask
                );
                console.log(props.modalState);
              }}
            />
          </button>
        </div>
        <div className="PopUp__Main">
          <div className="PopUp__Main-Name DoubleInput">
            <div className="PopUp__Main-Name__article ">
              <div
                className="PopUp-InputsArticle"
                style={props.isDirty && props.isInvalid ? invalidTextStyle : {}}
              >
                Имя<span style={{ color: "red" }}>*</span>{" "}
              </div>
            </div>
            <form action="submit">
              {" "}
              {/* Поля ввода для имени*/}
              <NameInput
                modalState={props.modalState}
                name={props.name}
                nameInput={props.nameInput}
                handlerNameInput={props.handlerNameInput}
              />
            </form>
          </div>
          {/* Условия появления Select */}
          {props.modalState.createEditModal.entityType ===
          modalEntityType.TASK ? (
            <div className="PopUp__Main-Categorie DoubleInput">
              <div className="PopUp__Main-Categorie__article ">
                <div className="PopUp-InputsArticle">Категория </div>
              </div>
              <div style={{ display: "flex" }}>
                {/* Поля для выбора категорий*/}
                <PopUpSelect />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="PopUp__Main-Description">
          <div className="PopUp__Main-Description">
            <div className="PopUp-InputsArticle">Описание </div>
            {/* Поля для ввода для описания*/}
            <TaskTextarea
              modalState={props.modalState}
              description={props.description}
              handlerDescriptionInput={props.handlerDescriptionInput}
              descriptionInput={props.descriptionInput}
            />
          </div>
        </div>

        <div className="PopUp__buttons">
          <div className="PopUp__buttons-create">
            {/* Кнопки  для сохранения*/}
            {props.modalState.createEditModal.action ===
            modalActionsType.CREATE ? (
              <CreateButton
                setModalState={props.setModalState}
                modalState={props.modalState}
                name={props.name}
                description={props.description}
              />
            ) : (
              <SaveButton
                setModalState={props.setModalState}
                modalState={props.modalState}
              />
            )}
          </div>
          <div className="PopUp__buttons-close">
            <CloseButton setModalState={props.setModalState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditPopUp;
