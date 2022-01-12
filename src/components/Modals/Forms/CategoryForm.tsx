import React from "react";
import "./Form.css";
import Textarea from "../../Textarea";
import ImgButton from "../../ImgButton";
import closeImg from "../../../images/Close.svg";
import Button from "../../Button";

export interface IForm {
  modalValues: any;
  nameInputRef: any;
  descriptionRef: any;
  styles: any;
  descriptionOnChange: () => void;
  acceptOnClick: () => void;
  closeModal: () => void;
  onChangeName: () => void;
  nameInputOnFocus: () => void;
}

const CategoryForm = (props: IForm) => {
  return (
    <div className="Modal">
      <div className="Modal__Article">
        <div className="Modal__Article-Name ">
          <span>{props.modalValues.titleValue}</span>
        </div>
        <ImgButton
          img={closeImg}
          onClick={props.closeModal}
          className="Modal__Article-Close"
        />
      </div>
      <form className="Modal__Form">
        <label className="ModalForm__Item">
          <p
            className="ModalForm__Item-Name"
            style={props.styles.nameArticleValidStyle}
          >
            Имя <span style={{ color: "red" }}>*</span>
          </p>
          <input
            type="text"
            placeholder="Введите имя категории"
            ref={props.nameInputRef}
            onChange={props.onChangeName}
            onFocus={props.nameInputOnFocus}
            value={props.modalValues.nameInputValue}
            style={props.styles.nameInputValidStyle}
          />
        </label>
        <label className="ModalForm__Item">
          <p className="ModalForm__Item-Name">Описание</p>
          <Textarea
            value={props.modalValues.descriptionTextAreaValue}
            placeholder="Введите описание категории"
            descriptionRef={props.descriptionRef}
            onChange={props.descriptionOnChange}
          />
        </label>
      </form>
      <div className="Modal__buttons">
        <div className="Modal__buttons-create">
          {/* Кнопки  для сохранения*/}
          <Button
            onClick={props.acceptOnClick}
            title={props.modalValues.buttonTitle}
            disabled={props.styles.disabled}
          />
        </div>
        <div className="Modal__buttons-close">
          <Button onClick={props.closeModal} title="Закрыть" />
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
