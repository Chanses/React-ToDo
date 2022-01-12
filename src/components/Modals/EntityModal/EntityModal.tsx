import React from "react";
import "./EntityModal.css";
import closeImg from "../../../images/Close.svg";
import { ModalState } from "../../../AppContainer";
import { ITaskItem } from "../../../models/ITaskItem";
import Button from "../../Button";
import ImgButton from "../../ImgButton";
import TaskForm from "./Forms/TaskForm";
import CategoryForm from "./Forms/CategoryForm";

interface IEntityModal {
  onChangeSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
  closePopUp: () => void;
  onClickButton: () => void;
  nameInputOnFocus: () => void;
  onChangeName: () => void;
  descriptionOnChange: () => void;
  taskItem: ITaskItem;
  modalState: ModalState;
  nameInputRef: any;
  descriptionRef: any;
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
        {/* <TaskForm {...props} /> */}
        {/* <CategoryForm {...props} /> */}
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
