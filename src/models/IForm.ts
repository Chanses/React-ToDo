import { ModalRegistry } from "./enum/modalNameRegistry";

export interface IForm {
    onSubmitClick: (values: any) => void;
    submitButtonTitle: string;
    closeButtonTitle: string;
    modalName: keyof ModalRegistry;
}