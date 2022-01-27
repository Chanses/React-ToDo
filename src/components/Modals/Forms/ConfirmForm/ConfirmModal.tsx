import { IModal } from "../../../../models/IModal";
import ModalStore from "../../../../stores/ModalStore";
import Modal from "../../Modal";
import ModalFooter from "../../ModalFooter";
import "./ConfirmForm.css";

export interface IConfirmModal extends IModal {
  onSubmitClick: (value?: any) => void;
  confirmText: string;
}

const ConfirmModal = (props: IConfirmModal) => {
  const confirmModalChildren = (
    <form
      onSubmit={(obj) => {
        props.onSubmitClick();
        obj.preventDefault();
      }}
    >
      <div className="Confirm-text">{props.confirmText}</div>
      <ModalFooter {...props} {...ModalStore.modals[props.modalName]} />
    </form>
  );
  return <Modal {...props}>{confirmModalChildren}</Modal>;
};

export default ConfirmModal;
