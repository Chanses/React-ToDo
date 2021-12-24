import React from "react";
import CloseModalButton from "./Buttons/CloseModalButton";
import DeleteButton from "./Buttons/DeleteTaskButton";

interface IConfirmModal {
  closeModal: () => void;
  deleteButtonOnClick: () => void;
  ConfirmModalValues: any;
}

const ConfirmModal = (props: IConfirmModal) => {
  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article-Name">
          Удаление {props.ConfirmModalValues.ConfirmModalTitleValue}
        </div>
        <div className="PopUp__Main-small" style={{ color: "black" }}>
          <div className="PopUp__Main-Description-small">
            Вы уверены, что хотите удалить
            {props.ConfirmModalValues.ConfirmModalText}
          </div>
          <div className="PopUp__buttons">
            <div className="PopUp__buttons-create">
              <DeleteButton {...props} onClick={props.deleteButtonOnClick} />
            </div>
            <div className="PopUp__buttons-close">
              <CloseModalButton {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
