import React, { useEffect, useState } from "react";
import App from "./App";
import { deleteTask } from "./dbService";
import { deleteCategorie } from "./dbService";
import { ITask } from "./components/ListTasks/Task";
import { getTasks, getCategories } from "./dbService";
import { modalNames } from "./models/enum/modalNames";
import { IModalStateInterface } from "./models/IModalStateInterface";
import { modalResultEnum } from "./models/enum/modalResultEnum";
import { modalEntityType } from "./models/enum/modalEntityType";
import { modalActionsType } from "./models/enum/modalActionsType";
import { ICategorie } from "./components/ListCategories/Categorie";

export type ModalState = Record<modalNames, IModalStateInterface>;

const AppContainer = () => {
  // Состояния для попапов
  const [section, setSection] = useState<boolean>(true);
  // Установка значений
  const [itemId, setItemId] = useState<string>("");
  const [itemNameValue, setItemNameValue] = useState<string>("");
  const [itemDescriptionValue, setItemDescriptionValue] = useState<string>("");
  // Установка полученных значений
  const [tasksList, setTasksList] = useState<ITask[]>();
  const [categorieList, setCategorieList] = useState<ICategorie[]>();

  // Изменение состояний для попапов

  const [modalState, setModalState] = useState<ModalState>({
    createEditModal: {
      entityType: undefined,
      action: modalActionsType.CREATE,
      open: false,
      lastResult: modalResultEnum.OK,
    },
    deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
  });

  function setTaskSection() {
    setSection(true);
  }
  function setCategorieSection() {
    setSection(false);
  }
  const handleLoadTasks = (tasks: ITask[]) => setTasksList(tasks);

  useEffect(() => {
    if (
      (modalState.createEditModal.lastResult === modalResultEnum.OK ||
        modalState.deleteModal.lastResult === modalResultEnum.OK) &&
      (modalState.createEditModal.entityType === modalEntityType.TASK ||
        modalState.createEditModal.entityType === undefined)
    ) {
      getTasks(handleLoadTasks);
      console.log("appContainer effect");
    }
  }, [
    modalState.createEditModal.lastResult,
    modalState.deleteModal.lastResult,
  ]);

  const handleLoadCategorie = (categorie: ICategorie[]) =>
    setCategorieList(categorie);

  useEffect(() => {
    if (
      (modalState.createEditModal.lastResult === modalResultEnum.OK ||
        modalState.deleteModal.lastResult === modalResultEnum.OK) &&
      (modalState.createEditModal.entityType === modalEntityType.CATEGORY ||
        modalState.createEditModal.entityType === undefined)
    ) {
      getCategories(handleLoadCategorie);
      console.log("appContainer effect categ");
    }
  }, [
    modalState.createEditModal.lastResult,
    modalState.deleteModal.lastResult,
  ]);

  return (
    <App
      // Состояния для попапов
      section={section}
      modalState={modalState}
      // Значения
      itemId={itemId}
      itemNameValue={itemNameValue}
      itemDescriptionValue={itemDescriptionValue}
      // Полученные данные
      taskList={tasksList}
      categorieList={categorieList}
      // Изменение состояний для попапов
      setTaskSection={setTaskSection}
      setCategorieSection={setCategorieSection}
      setModalState={setModalState}
      // Установка значений
      setItemId={setItemId}
      setItemNameValue={setItemNameValue}
      setItemDescriptionValue={setItemDescriptionValue}
      // Удаление
      deleteTask={deleteTask}
      deleteCategorie={deleteCategorie}
    />
  );
};

export default AppContainer;
