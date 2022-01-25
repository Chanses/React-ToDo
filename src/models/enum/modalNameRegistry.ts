import { ICategoryModal } from "../../components/Modals/CategoryModal";
import { IConfirmModal } from "../../components/Modals/Forms/ConfirmForm/ConfirmModal";
import { ITaskModal } from "../../components/Modals/TaskModal";


export interface ModalRegistry {
    "confirmModal": IConfirmModal;
    "taskModal": ITaskModal;
    "categoryModal": ICategoryModal;
}