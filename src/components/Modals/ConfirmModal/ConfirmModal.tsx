import Button from "../../Button";
import "./ConfirmModal.css";

interface IConfirmModal {
  closeModal: () => void;
  onDeleteButtonClick: () => void;
  ConfirmModalValues: any;
}

const ConfirmModal = (props: IConfirmModal) => {
  return (
    <div className="ConfirmModal-Wrapper">
      <div className="ConfirmModal">
        <div className="ConfirmModal__Article-Name">
          {props.ConfirmModalValues.ConfirmModalTitleValue}
        </div>
        <div className="ConfirmModal__Main-small" style={{ color: "black" }}>
          <div className="ConfirmModal__Main-Description-small">
            {props.ConfirmModalValues.ConfirmModalText}
          </div>
          <div className="ConfirmModal__buttons">
            <div className="ConfirmModal__buttons-create">
              <Button
                onClick={props.onDeleteButtonClick}
                disabled={false}
                title="Да"
              />
            </div>
            <div className="ConfirmModal__buttons-close">
              <Button onClick={props.closeModal} disabled={false} title="Нет" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
