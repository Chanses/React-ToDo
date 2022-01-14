import { IConfirmModal } from "../../components/Modals/Forms/ConfirmForm/ConfirmModal";
import { IModalProps } from "../IModalProps";

export interface ModalRegistry {
    "confirmModal": IConfirmModal;
    "taskModal": IModalProps;
    "categoryModal": IModalProps;
}