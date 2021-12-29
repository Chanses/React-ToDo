import React, { useRef, useState } from "react";
import {
  addTask,
  editTask,
  editCategory,
  addCategory,
  deleteTask,
  deleteCategory,
} from "../../dbService";
import { ModalState } from "../../AppContainer";
import Modal from "./Modal";
import { ICategoryItem } from "../../models/ICategoryItem";
import { modalActionsType } from "../../models/enum/modalActionsType";
import { modalStateValues } from "../../models/modalStateValues";
import { modalEntityType } from "../../models/enum/modalEntityType";
import { ITaskItem } from "../../models/ITaskItem";

interface IModalContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  categorieList?: ICategoryItem[];
  section: boolean;
}

const ModalContainer = (props: IModalContainer) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const [selectValueId, setSelectValueId] = useState<string>("placeholder");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const nameInputRef = useRef<any>();
  const descriptionInput = useRef<any>();
  const selectRef = useRef<any>();
  const modalStyles = {
    invalidBorderStyle: {
      border: "2px red solid",
    },
    categoryNameInputStyle: {
      width: "calc(200% + 12px)",
    },
    invalidNameInputCategoryStyle: {
      border: "2px red solid",
      width: "calc(200% + 12px)",
    },
    invalidTextStyle: { color: "red" },
    hideElementStyle: { display: "none" },
  };
  const modalValues = {
    modalTitleAction:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "Создание"
        : props.modalState.createEditModal.action === modalActionsType.EDIT
        ? "Редактирование"
        : "Удаление",
    modalTitleSection:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? " задачи"
        : " категории",
    disabled:
      props.modalState.createEditModal.action === modalActionsType.DELETE
        ? false
        : props.modalState.createEditModal.action === modalActionsType.CREATE
        ? isInvalid
          ? true
          : false
        : !isChanged
        ? true
        : false,
    nameInputPlaceholder:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "Введите имя задачи"
        : "Введите имя категории",
    nameInputValue:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? props.taskItem.name
        : props.categoryItem.name,
    descriptionTextAreaPlaceholder:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "Введите описание задачи"
        : "Введите описание категории",
    descriptionTextAreaValue:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? props.taskItem.description
        : props.categoryItem.description,
    nameInputStyles:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? isDirty && isInvalid
          ? modalStyles.invalidBorderStyle
          : undefined
        : isDirty && isInvalid
        ? modalStyles.invalidNameInputCategoryStyle
        : modalStyles.categoryNameInputStyle,
    displaySelect:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "block"
        : "none",
    nameInputArticleStyle:
      isDirty && isInvalid ? modalStyles.invalidTextStyle : undefined,
    confirmButtonValue:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "Создать"
        : props.modalState.createEditModal.action === modalActionsType.EDIT
        ? "Сохранить"
        : "Да",
    dislineButtonValue:
      props.modalState.createEditModal.action === modalActionsType.CREATE ||
      props.modalState.createEditModal.action === modalActionsType.EDIT
        ? "Закрыть"
        : "Нет",
    formDisplayStyle:
      props.modalState.createEditModal.action === modalActionsType.CREATE ||
      props.modalState.createEditModal.action === modalActionsType.EDIT
        ? undefined
        : modalStyles.hideElementStyle,
    descriptionDeleteDisplayStyle:
      props.modalState.createEditModal.action === modalActionsType.CREATE ||
      props.modalState.createEditModal.action === modalActionsType.EDIT
        ? modalStyles.hideElementStyle
        : undefined,
    confirmDeleteText:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "Вы уверены, что хотите удалить задачу “" + props.taskItem.name + "”?"
        : "Вы уверены, что хотите удалить категорию “" +
          props.categoryItem.name +
          "”?",
  };

  const onChangeSelect = () => {
    const index = selectRef.current.selectedIndex;
    const optionElement = selectRef.current.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    setSelectValueId(optionElementId);
  };
  const clearInputs = () => {
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
  };
  const closePopUp = () => {
    props.setModalState(modalStateValues.CloseDontSave.CloseCreateCategory);
    props.setModalState(modalStateValues.CloseDontSave.CloseCreateTask);
    clearInputs();
  };
  const createTask = () => {
    props.setModalState(modalStateValues.CloseSave.CreateTask);
    addTask(props.taskItem.name, props.taskItem.description, selectValueId);
    clearInputs();
  };
  const createCategory = () => {
    props.setModalState(modalStateValues.CloseSave.CreateCategory);
    addCategory(props.categoryItem.name, props.categoryItem.description);
    clearInputs();
  };
  const saveTask = () => {
    props.setModalState(modalStateValues.CloseSave.CreateTask);
    onChangeSelect();
    editTask(
      props.taskItem.id,
      props.taskItem.name,
      props.taskItem.description,
      selectValueId
    );
    clearInputs();
  };
  const saveCategory = () => {
    props.setModalState(modalStateValues.CloseSave.CreateCategory);
    editCategory(
      props.categoryItem.id,
      props.categoryItem.name,
      props.categoryItem.description
    );
    clearInputs();
  };
  const confirmDeleteTask = () => {
    deleteTask(props.taskItem.id);
    props.setModalState(modalStateValues.CloseSave.DeleteTask);
    props.setTaskItem({
      ...props.taskItem,
      name: "",
      description: "",
    });
  };
  const confirmDeleteCategory = () => {
    deleteCategory(props.categoryItem.id);
    props.setModalState(modalStateValues.CloseSave.DeleteCategory);
    props.setCategoryItem({
      ...props.categoryItem,
      name: "",
      description: "",
    });
  };
  const nameHandler = () => {
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
  };
  const descriptionHandler = () => {
    props.setTaskItem({
      ...props.taskItem,
      description: descriptionInput?.current?.value,
    });
    props.setCategoryItem({
      ...props.categoryItem,
      description: descriptionInput?.current?.value,
    });
    props.taskItem!.description!.length < 1536
      ? setIsInvalid(false)
      : setIsInvalid(true);
  };
  const onChangeTaskDescription = () => {
    descriptionHandler();
    onChangeSelect();
    setIsChanged(true);
  };

  const onChangeCategoryDescription = () => {
    descriptionHandler();
    setIsChanged(true);
    props.categoryItem.description!.length < 512
      ? setIsInvalid(false)
      : setIsInvalid(true);
  };

  const onChangeTaskInput = () => {
    nameHandler();
    setIsChanged(true);
    onChangeSelect();
  };
  const handleCategoryNameInput = () => {
    nameHandler();
    setIsChanged(true);
  };

  const onClickButton = () => {
    if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
      if (props.modalState.createEditModal.action === modalActionsType.CREATE) {
        createTask();
      } else if (
        props.modalState.createEditModal.action === modalActionsType.EDIT
      )
        saveTask();
      else confirmDeleteTask();
    } else {
      if (props.modalState.createEditModal.action === modalActionsType.CREATE) {
        createCategory();
      } else if (
        props.modalState.createEditModal.action === modalActionsType.EDIT
      )
        saveCategory();
      else confirmDeleteCategory();
    }
  };
  const onChangeName = () => {
    if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
      onChangeTaskInput();
    } else handleCategoryNameInput();
  };
  const onChangeDescription = () => {
    if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
      onChangeTaskDescription();
    } else onChangeCategoryDescription();
  };

  const onFocusNameInput = () => {
    nameHandler();
  };

  return (
    <Modal
      {...props}
      nameInputRef={nameInputRef}
      selectRef={selectRef}
      descriptionInput={descriptionInput}
      selectValueId={selectValueId}
      modalValues={modalValues}
      onChangeSelect={onChangeSelect}
      onChangeName={onChangeName}
      onChangeDescription={onChangeDescription}
      onFocusNameInput={onFocusNameInput}
      onClickButton={onClickButton}
      setIsChanged={setIsChanged}
      closePopUp={closePopUp}
    />
  );
};

export default ModalContainer;
