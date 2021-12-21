import React from "react";
import "./StylePopUp.css";
import closeImg from "../../images/Close.svg";
import CreateButton from "./Buttons/CreateButton";
import SaveButton from "./Buttons/SaveButton";
import CloseButton from "./Buttons/CloseButton";
import TaskTextarea from "./Textareas/TaskTextarea";
import SelectPopUp from "./Select/SelectPopUp";
import NameInput from "./Textareas/NameInput";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import { modalActionsType } from "../../models/enum/modalActionsType";
import { modalEntityType } from "../../models/enum/modalEntityType";
import { ICategorie } from "../ListCategories/Categorie";

interface ICreateEditPopUp {
  handlerDescriptionInput: () => void;
  dirtyHandler: () => void;
  addTask: (name: string, description?: string, categorie?: string) => void;
  editTask: (
    id: string,
    name: string,
    description?: string,
    categorie?: string
  ) => void;
  editCategory: (id: string, name: string, description?: string) => void;
  handlerNameInput: () => void;
  setModalState: (state: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setSelectValueId: (selectValue: string) => void;
  handleSelect: () => void;
  modalState: ModalState;
  isDirty: boolean;
  isInvalid: boolean;
  name: string;
  description: string;
  itemId: string;
  nameInput: any;
  descriptionInput: any;
  categorieList?: ICategorie[];
  selectValueId: string;
}

const CreateEditPopUp = (props: ICreateEditPopUp) => {
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
                props.setName("");
                props.setDescription("");
              }}
            />
          </button>
        </div>
        <div className="PopUp__Main">
          <div className="PopUp__Main-Name DoubleInput">
            <div className="PopUp__Main-Name__article ">
              <div
                className="PopUp-InputsArticle"
                style={
                  props.isDirty && props.isInvalid
                    ? invalidTextStyle
                    : undefined
                }
              >
                Имя<span style={{ color: "red" }}>*</span>
              </div>
            </div>
            <form action="submit">
              {/* Поля ввода для имени*/}
              <NameInput {...props} />
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
                <SelectPopUp {...props} />
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
            <TaskTextarea {...props} />
          </div>
        </div>

        <div className="PopUp__buttons">
          <div className="PopUp__buttons-create">
            {/* Кнопки  для сохранения*/}
            {props.modalState.createEditModal.action ===
            modalActionsType.CREATE ? (
              <CreateButton {...props} />
            ) : (
              <SaveButton {...props} />
            )}
          </div>
          <div className="PopUp__buttons-close">
            <CloseButton {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditPopUp;
