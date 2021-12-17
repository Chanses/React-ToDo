import React, { useEffect, useState } from "react";
import App from "./App";
import { deleteTask } from "./dbService";
import { deleteCategorie } from "./dbService";
import { ITaskItem } from "./components/ListTasks/TasksListContainer";
import { ITask } from "./components/ListTasks/Task";
import { getTasks } from "./dbService";
import { modalNames } from "./models/enum/modalNames";
import { IModalStateInterface } from "./models/IModalStateInterface";
import { modalResultEnum } from "./models/enum/modalResultEnum";
import { modalEntityType } from "./models/enum/modalEntityType";

const AppContainer = () => {
  // Состояния для попапов
  const [isOpenCreateTask, setIsOpenCreateTask] = useState<boolean>(false);
  const [isOpenCreateCategorie, setIsOpenCreateCategorie] =
    useState<boolean>(false);
  const [editHander, setEditHandler] = useState<boolean>(true);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [section, setSection] = useState<boolean>(true);
  // Установка значений
  const [itemId, setItemId] = useState<string>("");
  const [taskItem, setTaskItem] = useState<ITaskItem>();
  const [itemNameValue, setItemNameValue] = useState<string>("");
  const [itemDescriptionValue, setItemDescriptionValue] = useState<string>("");
  // Установка полученных значений
  const [tasksList, setTasksList] = useState<ITask[]>();

  // Изменение состояний для попапов

  type ModalState = Record<modalNames, IModalStateInterface>;

  const [modalState, setModalState] = useState<ModalState>({
    createEditModal: {
      entityType: undefined,
      open: false,
      lastResult: undefined,
    },
    deleteModal: { open: false, lastResult: undefined },
  });

  function toogleEditHandlerCreate() {
    setEditHandler(true);
  }
  function toogleEditHandlerEdit() {
    setEditHandler(false);
  }
  let check = {
    createEditModal: {
      entityType: modalEntityType.TASK,
      open: true,
      lastResult: modalResultEnum.OK,
    },
    deleteModal: { open: false, lastResult: undefined },
  };
  setModalState({
    ...modalState,
    createEditModal: {
      entityType: undefined,
      open: false,
      lastResult: undefined,
    },
  });

  function toggleCreateTaskPopUp() {
    setIsOpenCreateTask(!isOpenCreateTask);
  }
  function toggleCreateCategoriePopUp() {
    setIsOpenCreateCategorie(!isOpenCreateCategorie);
  }
  function toggleDeletePopUp() {
    setIsOpenDelete(!isOpenDelete);
  }
  function setTaskSection() {
    setSection(true);
  }
  function setCategorieSection() {
    setSection(false);
  }
  const handleLoadTasks = (tasks: ITask[]) => setTasksList(tasks);

  useEffect(() => {
    if (modalState.createEditModal.lastResult === modalResultEnum.OK) {
      getTasks(handleLoadTasks);
      console.log("appContainer effect");
    }
  }, [modalState.createEditModal.lastResult]);

  return (
    <App
      // Состояния для попапов
      section={section}
      editHander={editHander}
      isOpenCreateTask={isOpenCreateTask}
      isOpenCreateCategorie={isOpenCreateCategorie}
      isOpenDelete={isOpenDelete}
      // Значения
      itemId={itemId}
      itemNameValue={itemNameValue}
      itemDescriptionValue={itemDescriptionValue}
      taskItem={taskItem}
      // Полученные данные
      taskList={tasksList}
      // Изменение состояний для попапов
      toggleCreateTaskPopUp={toggleCreateTaskPopUp}
      toogleEditHandlerCreate={toogleEditHandlerCreate}
      toogleEditHandlerEdit={toogleEditHandlerEdit}
      toggleDeletePopUp={toggleDeletePopUp}
      toggleCreateCategoriePopUp={toggleCreateCategoriePopUp}
      setTaskSection={setTaskSection}
      setCategorieSection={setCategorieSection}
      // Установка значений
      setItemId={setItemId}
      setTaskItem={setTaskItem}
      setItemNameValue={setItemNameValue}
      setItemDescriptionValue={setItemDescriptionValue}
      // Удаление
      deleteTask={deleteTask}
      deleteCategorie={deleteCategorie}
      // Получение данных
    />
  );
};

export default AppContainer;
