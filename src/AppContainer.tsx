import React, { useState } from "react";
import App from "./App";

const AppContainer = () => {
  const [isOpenCreateTask, setIsOpenCreateTask] = useState<boolean>(false);
  const [isOpenCreateCategorie, setIsOpenCreateCategorie] =
    useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [section, setSection] = useState<boolean>(true);
  const [editHander, setEditHandler] = useState<boolean>(true);

  function toogleEditHandlerCreate() {
    setEditHandler(true);
  }
  function toogleEditHandlerEdit() {
    setEditHandler(false);
  }

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

  return (
    <App
      isOpenCreateTask={isOpenCreateTask}
      isOpenCreateCategorie={isOpenCreateCategorie}
      isOpenDelete={isOpenDelete}
      editHander={editHander}
      section={section}
      toggleCreateTaskPopUp={toggleCreateTaskPopUp}
      toogleEditHandlerCreate={toogleEditHandlerCreate}
      toogleEditHandlerEdit={toogleEditHandlerEdit}
      toggleDeletePopUp={toggleDeletePopUp}
      toggleCreateCategoriePopUp={toggleCreateCategoriePopUp}
      setTaskSection={setTaskSection}
      setCategorieSection={setCategorieSection}
    />
  );
};

export default AppContainer;
