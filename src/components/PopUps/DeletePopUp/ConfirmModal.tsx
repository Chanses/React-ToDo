import React from "react";
import CloseModalButton from "./Buttons/CloseModalButton";
import DeleteButton from "./Buttons/DeleteTaskButton";
import "./ConfirmModal.css";

interface IConfirmModal {
  closeModal: () => void;
  deleteButtonOnClick: () => void;
  ConfirmModalValues: any;
}

const ConfirmModal = (props: IConfirmModal) => {
  return (
    <div className="ConfirmModal-Wrapper">
      <div className="ConfirmModal">
        <div className="ConfirmModal__Article-Name">
          Удаление {props.ConfirmModalValues.ConfirmModalTitleValue}
        </div>
        <div className="ConfirmModal__Main-small" style={{ color: "black" }}>
          <div className="ConfirmModal__Main-Description-small">
            Вы уверены, что хотите удалить
            {props.ConfirmModalValues.ConfirmModalText}
          </div>
          <div className="ConfirmModal__buttons">
            <div className="ConfirmModal__buttons-create">
              <DeleteButton {...props} onClick={props.deleteButtonOnClick} />
            </div>
            <div className="ConfirmModal__buttons-close">
              <CloseModalButton {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
