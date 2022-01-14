import React, { useEffect, useState } from "react";
import App from "./App";

import { getTasks, getCategories } from "./dbService";
import { modalNames } from "./models/enum/modalNames";
import { IModalStateInterface } from "./models/IModalStateInterface";
import { modalResultEnum } from "./models/enum/modalResultEnum";
import { modalActionsType } from "./models/enum/modalActionsType";
import { ICategoryItem } from "./models/ICategoryItem";
import { ITaskItem } from "./models/ITaskItem";
import { ModalService } from "./models/enum/modalNames";

export type ModalState = Record<modalNames, IModalStateInterface>;

const AppContainer = () => {
  // Состояния для попапов
  const [section, setSection] = useState<boolean>(true);
  // Установка значений
  const [taskItem, setTaskItem] = useState<ITaskItem>({
    id: "",
    name: "",
    description: "",
    categoryId: "",
  });
  const [categoryItem, setCategoryItem] = useState<ICategoryItem>({
    id: "",
    name: "",
    description: "",
  });
  // Установка полученных значений
  const [tasksList, setTasksList] = useState<ITaskItem[]>();
  const [categorieList, setCategorieList] = useState<ICategoryItem[]>();
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
  const handleLoadTasks = (tasks: ITaskItem[]) => setTasksList(tasks);

  useEffect(() => {
    if (
      modalState.createEditModal.lastResult === modalResultEnum.OK ||
      modalState.deleteModal.lastResult === modalResultEnum.OK
    ) {
      getTasks(handleLoadTasks);
    }
  }, [
    modalState.createEditModal.lastResult,
    modalState.deleteModal.lastResult,
  ]);

  const handleLoadCategorie = (categorie: ICategoryItem[]) =>
    setCategorieList(categorie);
  console.log(ModalService.isOpen);
  useEffect(() => {
    if (
      modalState.createEditModal.lastResult === modalResultEnum.OK ||
      modalState.deleteModal.lastResult === modalResultEnum.OK
    ) {
      getCategories(handleLoadCategorie);
    }
  }, [ModalService.isOpen]);

  return (
    <App
      // Состояния для попапов
      isModalOpen={ModalService.isOpen}
      section={section}
      modalState={modalState}
      // Значения
      taskItem={taskItem}
      categoryItem={categoryItem}
      // Полученные данные
      taskList={tasksList}
      categorieList={categorieList}
      // Изменение состояний для попапов
      setTaskSection={setTaskSection}
      setCategorieSection={setCategorieSection}
      setModalState={setModalState}
      // Установка значений
      setTaskItem={setTaskItem}
      setCategoryItem={setCategoryItem}
    />
  );
};

export default AppContainer;
