import React from "react";
import "./Modal.css";
import closeImg from "../../images/Close.svg";
import { ModalState } from "../../AppContainer";
import ModalSelectContainer from "./ModalSelectContainer";
import Textarea from "../Textarea";
import { ITaskItem } from "../../models/ITaskItem";
import Button from "../Button";
import ImgButton from "../ImgButton";

interface IModal {
  onChangeSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
  closePopUp: () => void;
  onClickButton: () => void;
  onFocusNameInput: () => void;
  onChangeName: () => void;
  onChangeDescription: () => void;
  taskItem: ITaskItem;
  modalState: ModalState;
  nameInputRef: any;
  descriptionInput: any;
  selectRef: any;
  selectValueId: string;
  modalValues: any;
}

const Modal = (props: IModal) => {
  return (
    <div className="Modal-Wrapper">
      <div className="Modal">
        <div className="Modal__Article">
          <div className="Modal__Article-Name ">
            <span>
              {props.modalValues.modalTitleAction +
                " " +
                props.modalValues.modalTitleSection}
            </span>
          </div>
          <ImgButton
            img={closeImg}
            onClick={props.closePopUp}
            className="Modal__Article-Close"
          />
        </div>
        <div className="Modal__Main" style={props.modalValues.formDisplayStyle}>
          <div className="Modal__Main-Name DoubleInput">
            <div className="Modal__Main-Name__article ">
              <div
                className="Modal-InputsArticle"
                style={props.modalValues.nameInputArticleStyle}
              >
                Имя<span style={{ color: "red" }}>*</span>
              </div>
            </div>
            <form action="submit">
              {/* Поля ввода для имени*/}
              <input
                ref={props.nameInputRef}
                onChange={props.onChangeName}
                onFocus={props.onFocusNameInput}
                placeholder={props.modalValues.nameInputPlaceholder}
                value={props.modalValues.nameInputValue}
                style={props.modalValues.nameInputStyles}
              />
            </form>
          </div>

          <div
            className="Modal__Main-Categorie DoubleInput"
            style={{ display: props.modalValues.displaySelect }}
          >
            <div className="Modal__Main-Categorie__article ">
              <div className="Modal-InputsArticle">Категория </div>
            </div>
            <div style={{ display: "flex" }}>
              {/* Поля для выбора категорий*/}
              <ModalSelectContainer {...props} />
            </div>
          </div>
        </div>
        <div
          className="Modal__Main-Description"
          style={props.modalValues.formDisplayStyle}
        >
          <div className="Modal__Main-Description">
            <div className="Modal-InputsArticle">Описание </div>
            {/* Поля для ввода для описания*/}
            <Textarea
              descriptionInput={props.descriptionInput}
              onChange={props.onChangeDescription}
              value={props.modalValues.descriptionTextAreaValue}
              placeholder={props.modalValues.descriptionTextAreaPlaceholder}
            />
          </div>
        </div>
        <div
          className="Modal__Main-Description-small"
          style={props.modalValues.descriptionDeleteDisplayStyle}
        >
          {props.modalValues.confirmDeleteText}
        </div>
        <div className="Modal__buttons">
          <div className="Modal__buttons-create">
            {/* Кнопки  для сохранения*/}
            <Button
              onClick={props.onClickButton}
              title={props.modalValues.confirmButtonValue}
              disabled={props.modalValues.disabled}
            />
          </div>
          <div className="Modal__buttons-close">
            <Button
              onClick={props.closePopUp}
              title={props.modalValues.dislineButtonValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
