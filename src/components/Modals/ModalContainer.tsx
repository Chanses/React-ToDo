import React, { useRef, useState } from "react";
import { ModalState } from "../../AppContainer";
import {
  addTask,
  editTask,
  editCategory,
  addCategory,
  deleteTask,
  deleteCategorie,
} from "../../dbService";
import { modalActionsType } from "../../models/enum/modalActionsType";
import { modalEntityType } from "../../models/enum/modalEntityType";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { modalStateValues } from "../../models/modalStateValues";
import ConfirmModal from "./Forms/ConfirmForm/ConfirmModal";
import CategoryForm, { IForm } from "./Forms/CategoryForm";
import TaskForm from "./Forms/TaskForm";
import "./Modal.css";
import Modal from "./Modal";

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
    // showModal: () => {
    //   // switch (modalName) {
    //   //   case "CreateCategory"
    //   // }
    //   if (props.modalState.createEditModal.action === modalActionsType.DELETE) {
    //     return (
    //       <ConfirmModal
    //         values={ModaleService.modals.confirmModal}
    //         {...props}
    //         closeModal={closeModal}
    //         acceptOnClick={onClickConfirm}
    //       />
    //     );
    //   } else if (
    //     props.modalState.createEditModal.entityType === modalEntityType.TASK
    //   ) {
    //     return (
    //       <TaskForm
    //         {...props}
    //         modalValues={ModaleService.modals.taskModal}
    //         styles={ModaleService.styles}
    //         nameInputOnFocus={nameInputOnFocus}
    //         setIsChanged={setIsChanged}
    //         onChangeSelect={onChangeSelect}
    //         closeModal={closeModal}
    //         acceptOnClick={onClickButton}
    //         selectRef={selectRef}
    //         nameInputRef={nameInputRef}
    //         descriptionRef={descriptionRef}
    //         selectValueId={selectValueId}
    //         onChangeName={onChangeTaskInput}
    //         descriptionOnChange={onChangeTaskDescription}
    //       />
    //     );
    //   } else if (
    //     props.modalState.createEditModal.entityType === modalEntityType.CATEGORY
    //   ) {
    //     return (
    //       <CategoryForm
    //         {...props}
    //         nameInputOnFocus={nameInputOnFocus}
    //         closeModal={closeModal}
    //         acceptOnClick={onClickButton}
    //         nameInputRef={nameInputRef}
    //         descriptionRef={descriptionRef}
    //         modalValues={ModaleService.modals.categoryModal}
    //         onChangeName={handleCategoryNameInput}
    //         descriptionOnChange={onChangeCategoryDescription}
    //         styles={ModaleService.styles}
    //       />
    //     );
    //   }
    // },
  };
  // const onChangeSelect = () => {
  //   const index = selectRef.current.selectedIndex;
  //   const optionElement = selectRef.current.childNodes[index];
  //   const optionElementId = optionElement.getAttribute("id");
  //   setSelectValueId(optionElementId);
  // };
  // const clearInputs = () => {
  //   props.setCategoryItem({
  //     ...props.categoryItem,
  //     name: "",
  //     description: "",
  //   });
  //   props.setTaskItem({
  //     ...props.taskItem,
  //     name: "",
  //     description: "",
  //   });
  // };
  // const closeModal = () => {
  //   props.setModalState(modalStateValues.CloseDontSave.CloseCreateCategory);
  //   props.setModalState(modalStateValues.CloseDontSave.CloseCreateTask);
  //   clearInputs();
  // };
  // const createTask = () => {
  //   props.setModalState(modalStateValues.CloseSave.CreateTask);
  //   addTask(props.taskItem.name, props.taskItem.description, selectValueId);
  //   clearInputs();
  // };
  // const createCategory = () => {
  //   props.setModalState(modalStateValues.CloseSave.CreateCategory);
  //   addCategory(props.categoryItem.name, props.categoryItem.description);
  //   clearInputs();
  // };
  // const saveTask = () => {
  //   props.setModalState(modalStateValues.CloseSave.CreateTask);
  //   onChangeSelect();
  //   editTask(
  //     props.taskItem.id,
  //     props.taskItem.name,
  //     props.taskItem.description,
  //     selectValueId
  //   );
  //   clearInputs();
  // };
  // const saveCategory = () => {
  //   props.setModalState(modalStateValues.CloseSave.CreateCategory);
  //   editCategory(
  //     props.categoryItem.id,
  //     props.categoryItem.name,
  //     props.categoryItem.description
  //   );
  //   clearInputs();
  // };
  // const nameHandler = () => {
  //   setIsDirty(true);
  //   props.setTaskItem({
  //     ...props.taskItem,
  //     name: nameInputRef?.current?.value,
  //   });
  //   props.setCategoryItem({
  //     ...props.categoryItem,
  //     name: nameInputRef?.current?.value,
  //   });
  //   (props.taskItem.name.length || props.categoryItem.name.length) > 1 &&
  //   (props.taskItem.name.length || props.categoryItem.name.length) < 256
  //     ? setIsInvalid(false)
  //     : setIsInvalid(true);
  // };
  // const descriptionHandler = () => {
  //   props.setTaskItem({
  //     ...props.taskItem,
  //     description: descriptionRef?.current?.value,
  //   });
  //   props.setCategoryItem({
  //     ...props.categoryItem,
  //     description: descriptionRef?.current?.value,
  //   });
  //   props.taskItem!.description!.length < 1536
  //     ? setIsInvalid(false)
  //     : setIsInvalid(true);
  // };
  // const onChangeTaskDescription = () => {
  //   descriptionHandler();
  //   onChangeSelect();
  //   setIsChanged(true);
  // };

  // const onChangeCategoryDescription = () => {
  //   descriptionHandler();
  //   setIsChanged(true);
  //   props.categoryItem.description!.length < 512
  //     ? setIsInvalid(false)
  //     : setIsInvalid(true);
  // };

  // const onChangeTaskInput = () => {
  //   nameHandler();
  //   setIsChanged(true);
  //   onChangeSelect();
  // };
  // const handleCategoryNameInput = () => {
  //   nameHandler();
  //   setIsChanged(true);
  // };
  // const nameInputOnFocus = () => {
  //   nameHandler();
  // };
  // const onClickButton = () => {
  //   if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
  //     if (props.modalState.createEditModal.action === modalActionsType.CREATE) {
  //       createTask();
  //     } else saveTask();
  //   } else {
  //     if (props.modalState.createEditModal.action === modalActionsType.CREATE) {
  //       createCategory();
  //     } else saveCategory();
  //   }
  // };
  // const onClickConfirm = () => {
  //   if (props.modalState.createEditModal.entityType === modalEntityType.TASK) {
  //     deleteTask(props.taskItem.id);
  //     props.setModalState(modalStateValues.CloseSave.DeleteTask);
  //     props.setTaskItem({
  //       ...props.taskItem,
  //       name: "",
  //       description: "",
  //     });
  //   } else {
  //     deleteCategorie(props.categoryItem.id);
  //     props.setModalState(modalStateValues.CloseSave.DeleteCategory);
  //     props.setCategoryItem({
  //       ...props.categoryItem,
  //       name: "",
  //       description: "",
  //     });
  //   }
  // };
  return <div className="Modal-Wrapper"></div>;
};

export default ModalContainer;
