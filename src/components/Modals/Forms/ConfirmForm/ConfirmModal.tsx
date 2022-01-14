import { ModalRegistry } from "../../../../models/enum/modalNameRegistry";
import { IModal } from "../../../../models/IModal";
import Button from "../../../Button";
import Modal from "../../Modal";
import "./ConfirmForm.css";

export interface IConfirmModal extends IModal {
  onCloseModal: void;
  onSubmitClick: (value?: any) => void;
}

const ConfirmModal = (props: IConfirmModal) => {
  return (
    <Modal {...props}>{() => <div>Вы уверены, что хотите удалить?</div>}</Modal>
  );
};

export default ConfirmModal;
