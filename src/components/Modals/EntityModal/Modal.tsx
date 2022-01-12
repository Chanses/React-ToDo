import React, { useRef, useState } from "react";
import { ModalState } from "../../../AppContainer";
import {
  addTask,
  editTask,
  editCategory,
  addCategory,
  deleteTask,
  deleteCategorie,
} from "../../../dbService";
import { modalActionsType } from "../../../models/enum/modalActionsType";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { ITaskItem } from "../../../models/ITaskItem";
import { modalStateValues } from "../../../models/modalStateValues";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import CategoryForm from "./Forms/CategoryForm";
import TaskForm from "./Forms/TaskForm";
import "./EntityModal.css";

interface IModalContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  modalState: ModalState;
  categoryItem: ICategoryItem;
  categorieList?: ICategoryItem[];
  section: boolean;
}

const ModalContainer = (props: IModalContainer) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const [selectValueId, setSelectValueId] = useState<string>("placeholder");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const selectRef = useRef<any>();
  const ModaleService = {
    modals: {
      confirmModal:
        props.modalState.createEditModal.entityType === modalEntityType.TASK
          ? {
              titleValue: "Удаление задачи",
              contentValue:
                "Вы уверены, что хотите удалить задачу “" +
                props.taskItem.name +
                "”?",
            }
          : {
              titleValue: "Удаление категории",
              contentValue:
                "Вы уверены, что хотите удалить категорию “" +
                props.categoryItem.name +
                "”?",
            },
      taskModal:
        props.modalState.createEditModal.action === modalActionsType.CREATE
          ? {
              titleValue: "Создание задачи",
              buttonTitle: "Создать",
              nameInputValue: props.taskItem.name,
              descriptionTextAreaValue: props.taskItem.description,
            }
          : {
              titleValue: "Редактирование задачи",
              buttonTitle: "Сохранить",
              nameInputValue: props.taskItem.name,
              descriptionTextAreaValue: props.taskItem.description,
            },
      categoryModal:
        props.modalState.createEditModal.action === modalActionsType.CREATE
          ? {
              titleValue: "Создание категории",
              buttonTitle: "Создать",
              nameInputValue: props.categoryItem.name,
              descriptionTextAreaValue: props.categoryItem.description,
            }
          : {
              titleValue: "Редактирование категории",
              buttonTitle: "Сохранить",
              nameInputValue: props.categoryItem.name,
              descriptionTextAreaValue: props.categoryItem.description,
            },
    },
    styles: {
      nameInputValidStyle:
        isDirty && isInvalid ? { border: "2px red solid" } : undefined,
      nameArticleValidStyle:
        isDirty && isInvalid ? { color: "red" } : undefined,
      disabled:
        props.modalState.createEditModal.action === modalActionsType.CREATE
          ? isInvalid
            ? true
            : false
          : !isChanged
          ? true
          : false,
    },
    onChangeSelect: () => {
      const index = selectRef.current.selectedIndex;
      const optionElement = selectRef.current.childNodes[index];
      const optionElementId = optionElement.getAttribute("id");
      setSelectValueId(optionElementId);
    },
    clearInputs: () => {
      props.setCategoryItem({
        ...props.categoryItem,
        name: "",
        description: "",
      });
      props.setTaskItem({
        ...props.taskItem,
        name: "",
        description: "",
      });
    },
    closeModal: () => {
      props.setModalState(modalStateValues.CloseDontSave.CloseCreateCategory);
      props.setModalState(modalStateValues.CloseDontSave.CloseCreateTask);
      ModaleService.clearInputs();
    },
    createTask: () => {
      props.setModalState(modalStateValues.CloseSave.CreateTask);
      addTask(props.taskItem.name, props.taskItem.description, selectValueId);
      ModaleService.clearInputs();
    },
    createCategory: () => {
      props.setModalState(modalStateValues.CloseSave.CreateCategory);
      addCategory(props.categoryItem.name, props.categoryItem.description);
      ModaleService.clearInputs();
    },
    saveTask: () => {
      props.setModalState(modalStateValues.CloseSave.CreateTask);
      ModaleService.onChangeSelect();
      editTask(
        props.taskItem.id,
        props.taskItem.name,
        props.taskItem.description,
        selectValueId
      );
      ModaleService.clearInputs();
    },
    saveCategory: () => {
      props.setModalState(modalStateValues.CloseSave.CreateCategory);
      editCategory(
        props.categoryItem.id,
        props.categoryItem.name,
        props.categoryItem.description
      );
      ModaleService.clearInputs();
    },
    nameHandler: () => {
      setIsDirty(true);
      props.setTaskItem({
        ...props.taskItem,
        name: nameInputRef?.current?.value,
      });
      props.setCategoryItem({
        ...props.categoryItem,
        name: nameInputRef?.current?.value,
      });
      (props.taskItem.name.length || props.categoryItem.name.length) > 1 &&
      (props.taskItem.name.length || props.categoryItem.name.length) < 256
        ? setIsInvalid(false)
        : setIsInvalid(true);
    },
    descriptionHandler: () => {
      props.setTaskItem({
        ...props.taskItem,
        description: descriptionRef?.current?.value,
      });
      props.setCategoryItem({
        ...props.categoryItem,
        description: descriptionRef?.current?.value,
      });
      props.taskItem!.description!.length < 1536
        ? setIsInvalid(false)
        : setIsInvalid(true);
    },
    onChangeTaskDescription: () => {
      ModaleService.descriptionHandler();
      ModaleService.onChangeSelect();
      setIsChanged(true);
    },

    onChangeCategoryDescription: () => {
      ModaleService.descriptionHandler();
      setIsChanged(true);
      props.categoryItem.description!.length < 512
        ? setIsInvalid(false)
        : setIsInvalid(true);
    },

    onChangeTaskInput: () => {
      ModaleService.nameHandler();
      setIsChanged(true);
      ModaleService.onChangeSelect();
    },
    handleCategoryNameInput: () => {
      ModaleService.nameHandler();
      setIsChanged(true);
    },
    nameInputOnFocus: () => {
      ModaleService.nameHandler();
    },
    onClickButton: () => {
      if (
        props.modalState.createEditModal.entityType === modalEntityType.TASK
      ) {
        if (
          props.modalState.createEditModal.action === modalActionsType.CREATE
        ) {
          ModaleService.createTask();
        } else ModaleService.saveTask();
      } else {
        if (
          props.modalState.createEditModal.action === modalActionsType.CREATE
        ) {
          ModaleService.createCategory();
        } else ModaleService.saveCategory();
      }
    },
    onClickConfirm: () => {
      if (
        props.modalState.createEditModal.entityType === modalEntityType.TASK
      ) {
        deleteTask(props.taskItem.id);
        props.setModalState(modalStateValues.CloseSave.DeleteTask);
        props.setTaskItem({
          ...props.taskItem,
          name: "",
          description: "",
        });
      } else {
        deleteCategorie(props.categoryItem.id);
        props.setModalState(modalStateValues.CloseSave.DeleteCategory);
        props.setCategoryItem({
          ...props.categoryItem,
          name: "",
          description: "",
        });
      }
    },

    showModal: () => {
      if (props.modalState.createEditModal.action === modalActionsType.DELETE) {
        return (
          <ConfirmModal
            values={ModaleService.modals.confirmModal}
            {...props}
            closeModal={ModaleService.closeModal}
            acceptOnClick={ModaleService.onClickConfirm}
          />
        );
      } else if (
        props.modalState.createEditModal.entityType === modalEntityType.TASK
      ) {
        return (
          <TaskForm
            {...props}
            {...ModaleService}
            nameInputOnFocus={ModaleService.nameInputOnFocus}
            setIsChanged={setIsChanged}
            onChangeSelect={ModaleService.onChangeSelect}
            closeModal={ModaleService.closeModal}
            acceptOnClick={ModaleService.onClickButton}
            selectRef={selectRef}
            nameInputRef={nameInputRef}
            descriptionRef={descriptionRef}
            modalValues={ModaleService.modals.taskModal}
            selectValueId={selectValueId}
            onChangeName={ModaleService.onChangeTaskInput}
            descriptionOnChange={ModaleService.onChangeTaskDescription}
            styles={ModaleService.styles}
          />
        );
      } else if (
        props.modalState.createEditModal.entityType === modalEntityType.CATEGORY
      ) {
        return (
          <CategoryForm
            {...props}
            {...ModaleService}
            nameInputOnFocus={ModaleService.nameInputOnFocus}
            closeModal={ModaleService.closeModal}
            acceptOnClick={ModaleService.onClickButton}
            nameInputRef={nameInputRef}
            descriptionRef={descriptionRef}
            modalValues={ModaleService.modals.categoryModal}
            onChangeName={ModaleService.handleCategoryNameInput}
            descriptionOnChange={ModaleService.onChangeCategoryDescription}
            styles={ModaleService.styles}
          />
        );
      }
    },
  };
  return <div className="EntityModal-Wrapper">{ModaleService.showModal()}</div>;
};

export default ModalContainer;
