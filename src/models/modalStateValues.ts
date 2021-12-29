import { modalActionsType } from "./enum/modalActionsType"
import { modalEntityType } from "./enum/modalEntityType"
import { modalResultEnum } from "./enum/modalResultEnum"

export const modalStateValues = {

    Open: {
        // Открытие окон
        OpenCreateTask: {

            createEditModal: {
                entityType: modalEntityType.TASK,
                action: modalActionsType.CREATE,
                open: true,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        OpenEditTask: {

            createEditModal: {
                entityType: modalEntityType.TASK,
                action: modalActionsType.EDIT,
                open: true,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        OpenDeleteTask: {

            createEditModal: {
                entityType: modalEntityType.TASK,
                action: modalActionsType.DELETE,
                open: true,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        OpenCreateCategory: {
            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                action: modalActionsType.CREATE,
                open: true,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        OpenEditCategory: {
            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                action: modalActionsType.EDIT,
                open: true,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        OpenDeleteCategory: {

            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                action: modalActionsType.DELETE,
                open: true,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
    },
    // Закрытие окон с сохранением
    CloseSave: {
        CreateTask: {
            createEditModal: {
                entityType: modalEntityType.TASK,
                open: false,
                lastResult: modalResultEnum.OK,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        CreateCategory: {
            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                open: false,
                lastResult: modalResultEnum.OK,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        DeleteTask: {
            createEditModal: {
                entityType: modalEntityType.TASK,
                open: false,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.OK },
        },
        DeleteCategory: {
            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                open: false,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.OK },
        },

    },
    // Закрытие окон без сохранения

    CloseDontSave: {
        CloseCreateTask: {
            createEditModal: {
                entityType: modalEntityType.TASK,
                open: false,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        CloseCreateCategory: {
            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                open: false,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        CloseDeleteTask: {
            createEditModal: {
                entityType: modalEntityType.TASK,
                open: false,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },
        CloseDeleteCategory: {
            createEditModal: {
                entityType: modalEntityType.CATEGORY,
                open: false,
                lastResult: modalResultEnum.CANCEL,
            },
            deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
        },

    }

}