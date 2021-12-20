import { modalResultEnum } from "./enum/modalResultEnum"
import { modalEntityType } from "./enum/modalEntityType"
import { modalActionsType } from "./enum/modalActionsType"
export interface IModalStateInterface {
    entityType?: modalEntityType | undefined;
    action?: modalActionsType | undefined;
    open: boolean;
    lastResult: modalResultEnum | undefined;

}