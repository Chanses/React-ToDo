import { IModal } from "../../../../models/IModal";
import Modal from "../../Modal";
import "./ConfirmForm.css";

export interface IConfirmModal extends IModal {
  onSubmitClick: (value?: any) => void;
}

const ConfirmModal = (props: IModal) => {
  return <Modal {...props}></Modal>;
};

export default ConfirmModal;
