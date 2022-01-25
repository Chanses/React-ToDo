import { IModal } from "../../../../models/IModal";
import ModalStore from "../../../stores/ModalStore";
import Modal from "../../Modal";
import ModalFooter from "../../ModalFooter";
import "./ConfirmForm.css";

export interface IConfirmModal extends IModal {
  onSubmitClick: (value?: any) => void;
  confirmText: string;
}

const ConfirmModal = (props: IConfirmModal) => {
  const confirmModalChildren = (
    <>
      <div className="Confirm-text">{props.confirmText}</div>
      <ModalFooter {...props} {...ModalStore.modals[props.modalName]} />
    </>
  );
  return <Modal {...props}>{confirmModalChildren}</Modal>;
};

export default ConfirmModal;
