import React from "react";
import Button from "../../reused/Buttons/Button";
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
              <Button
                onClick={props.deleteButtonOnClick}
                disabled={false}
                title="Да"
              />
            </div>
            <div className="ConfirmModal__buttons-close">
              <Button
                onClick={props.closeModal}
                disabled={false}
                title={"Нет"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
