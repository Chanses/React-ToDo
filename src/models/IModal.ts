import { ModalRegistry } from "./enum/modalNameRegistry";
import { modalNamesEnum } from "./enum/modalNames";

export interface IModal {
    children: React.FC;
    title: string;
    modalName: keyof ModalRegistry;
    onCloseModal: void;
    onSubmitClick: (value?: any) => void;
    submitButtonTitle: string;
    closeButtonTitle: string;
}