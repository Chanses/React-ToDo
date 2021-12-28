import React from "react";
import "./EntityModal.css";
import closeImg from "../../../images/Close.svg";
import { ModalState } from "../../../AppContainer";
import SelectPopUpContainer from "./SelectEntityModalContainer";
import Textarea from "../../Textarea";
import { ITaskItem } from "../../../models/ITaskItem";
import Button from "../../Button";
import ImgButton from "../../ImgButton";

interface IEntityModal {
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

const EntityModal = (props: IEntityModal) => {
  return (
    <div className="EntityModal-Wrapper">
      <div className="EntityModal">
        <div className="EntityModal__Article">
          <div className="EntityModal__Article-Name ">
            <span>{props.modalValues.modalTitleAction}</span>
            <span>{props.modalValues.modalTitleSection}</span>
          </div>
          <ImgButton
            img={closeImg}
            onClick={props.closePopUp}
            className="EntityModal__Article-Close"
          />
        </div>
        <div className="EntityModal__Main">
          <div className="EntityModal__Main-Name DoubleInput">
            <div className="EntityModal__Main-Name__article ">
              <div
                className="EntityModal-InputsArticle"
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
            className="EntityModal__Main-Categorie DoubleInput"
            style={{ display: props.modalValues.displaySelect }}
          >
            <div className="EntityModal__Main-Categorie__article ">
              <div className="EntityModal-InputsArticle">Категория </div>
            </div>
            <div style={{ display: "flex" }}>
              {/* Поля для выбора категорий*/}
              <SelectPopUpContainer {...props} />
            </div>
          </div>
        </div>
        <div className="EntityModal__Main-Description">
          <div className="EntityModal__Main-Description">
            <div className="EntityModal-InputsArticle">Описание </div>
            {/* Поля для ввода для описания*/}
            <Textarea
              descriptionInput={props.descriptionInput}
              onChange={props.onChangeDescription}
              value={props.modalValues.descriptionTextAreaValue}
              placeholder={props.modalValues.descriptionTextAreaPlaceholder}
            />
          </div>
        </div>

        <div className="EntityModal__buttons">
          <div className="EntityModal__buttons-create">
            {/* Кнопки  для сохранения*/}
            <Button
              onClick={props.onClickButton}
              title={props.modalValues.buttonTitle}
              disabled={props.modalValues.disabled}
            />
          </div>
          <div className="EntityModal__buttons-close">
            <Button onClick={props.closePopUp} title="Закрыть" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityModal;
