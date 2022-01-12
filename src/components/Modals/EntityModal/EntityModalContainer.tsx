import React, { useRef, useState } from "react";
import {
  addTask,
  editTask,
  editCategory,
  addCategory,
} from "../../../dbService";
import { ModalState } from "../../../AppContainer";
import EntityModal from "./EntityModal";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { modalActionsType } from "../../../models/enum/modalActionsType";
import { modalStateValues } from "../../../models/modalStateValues";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { ITaskItem } from "../../../models/ITaskItem";
import Modal from "./Modal";
import CategoryForm from "./Forms/CategoryForm";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import TaskForm from "./Forms/TaskForm";

interface IEntityModalContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  modalState: ModalState;
  categorieList?: ICategoryItem[];
  section: boolean;
}

const EntityModalContainer = (props: IEntityModalContainer) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const [selectValueId, setSelectValueId] = useState<string>("placeholder");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const selectRef = useRef<any>();
  const modalStyles = {
    invalidBorderStyle: {
      border: "2px red solid",
    },
    invalidNameInputCategoryStyle: {
      border: "2px red solid",
    },
    invalidTextStyle: { color: "red" },
  };
  const modalValues = {
    buttonTitle:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "Создать"
        : "Сохранить",
    modalTitleAction:
      props.modalState.createEditModal.action === modalActionsType.CREATE
        ? "Создать"
        : "Редактировать",
    modalTitleSection:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? " задачу"
        : " категорию",
    disabled:
      props.modalState.createEditModal.action === modalActionsType.CREATE
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
        : undefined,
    displaySelect:
      props.modalState.createEditModal.entityType === modalEntityType.TASK
        ? "block"
        : "none",
    nameInputArticleStyle:
      isDirty && isInvalid ? modalStyles.invalidTextStyle : undefined,
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
      description: descriptionRef?.current?.value,
    });
    props.setCategoryItem({
      ...props.categoryItem,
      description: descriptionRef?.current?.value,
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
      } else saveTask();
    } else {
      if (props.modalState.createEditModal.action === modalActionsType.CREATE) {
        createCategory();
      } else saveCategory();
    }
  };
  const onChangeName = () => {
    if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
      onChangeTaskInput();
    } else handleCategoryNameInput();
  };
  const descriptionOnChange = () => {
    if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
      onChangeTaskDescription();
    } else onChangeCategoryDescription();
  };

  const nameInputOnFocus = () => {
    nameHandler();
  };

  return (
    <EntityModal
      {...props}
      nameInputRef={nameInputRef}
      selectRef={selectRef}
      descriptionRef={descriptionRef}
      selectValueId={selectValueId}
      modalValues={modalValues}
      onChangeSelect={onChangeSelect}
      onChangeName={onChangeName}
      descriptionOnChange={descriptionOnChange}
      nameInputOnFocus={nameInputOnFocus}
      onClickButton={onClickButton}
      setIsChanged={setIsChanged}
      closePopUp={closePopUp}
    />
  );
};

export default EntityModalContainer;
