import { modalResultEnum } from "./enum/modalResultEnum"
import { modalEntityType } from "./enum/modalEntityType"
export interface IModalStateInterface {
    entityType?: modalEntityType | undefined;
    open: boolean;
    lastResult: modalResultEnum | undefined;
}