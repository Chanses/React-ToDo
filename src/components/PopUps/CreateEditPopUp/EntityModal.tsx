import React from "react";
import "../StylePopUp.css";
import closeImg from "../../../images/Close.svg";
import { ModalState } from "../../../AppContainer";
import SelectPopUpContainer from "./Select/SelectPopUpContainer";
import TaskTextarea from "./Textareas/DescriptionTextarea";
import Button from "./Buttons/Button";
import CloseButton from "./Buttons/CloseButton";
import NameInput from "./Textareas/NameInput";
import { ITaskItem } from "../../../models/ITaskItem";

interface IEntityModal {
  handleSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
  closePopUp: () => void;
  onClick: () => void;
  onFocusNameInput: () => void;
  onChangeInput: () => void;
  onChangeTextArea: () => void;
  taskItem: ITaskItem;
  modalState: ModalState;
  nameInput: any;
  descriptionInput: any;
  selectRef: any;
  selectValueId: string;
  modalValues: any;
}

const EntityModal = (props: IEntityModal) => {
  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article">
          <div className="PopUp__Article-Name ">
            <span>{props.modalValues.modalTitleAction}</span>
            <span>{props.modalValues.modalTitleSection}</span>
          </div>
          <button className="PopUp__Article-Close">
            <img src={closeImg} alt="" onClick={props.closePopUp} />
          </button>
        </div>
        <div className="PopUp__Main">
          <div className="PopUp__Main-Name DoubleInput">
            <div className="PopUp__Main-Name__article ">
              <div
                className="PopUp-InputsArticle"
                style={props.modalValues.nameInputArticleStyle}
              >
                Имя<span style={{ color: "red" }}>*</span>
              </div>
            </div>
            <form action="submit">
              {/* Поля ввода для имени*/}
              <NameInput
                {...props}
                onChange={props.onChangeInput}
                placeholder={props.modalValues.nameInputPlaceholder}
                value={props.modalValues.nameInputValue}
                onFocus={props.onFocusNameInput}
                style={props.modalValues.nameInputStyles}
              />
            </form>
          </div>

          <div
            className="PopUp__Main-Categorie DoubleInput"
            style={{ display: props.modalValues.displaySelect }}
          >
            <div className="PopUp__Main-Categorie__article ">
              <div className="PopUp-InputsArticle">Категория </div>
            </div>
            <div style={{ display: "flex" }}>
              {/* Поля для выбора категорий*/}
              <SelectPopUpContainer {...props} />
            </div>
          </div>
        </div>
        <div className="PopUp__Main-Description">
          <div className="PopUp__Main-Description">
            <div className="PopUp-InputsArticle">Описание </div>
            {/* Поля для ввода для описания*/}
            <TaskTextarea
              {...props}
              onChange={props.onChangeTextArea}
              value={props.modalValues.descriptionTextAreaValue}
              placeholder={props.modalValues.descriptionTextAreaPlaceholder}
            />
          </div>
        </div>

        <div className="PopUp__buttons">
          <div className="PopUp__buttons-create">
            {/* Кнопки  для сохранения*/}

            <Button
              {...props}
              title={props.modalValues.buttonTitle}
              disabled={props.modalValues.disabled}
            />
          </div>
          <div className="PopUp__buttons-close">
            <CloseButton {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityModal;
