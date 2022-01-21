import React, { useState } from "react";
import { addCategory, addTask } from "../../dbService";
import ModalStore from "../stores/ModalStore";
import CategoryForm from "../Modals/Forms/CategoryForm";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import Header from "./Header";
import CategoryState from "../stores/CategoryStore";
import { observer } from "mobx-react-lite";
import TaskForm from "../Modals/Forms/TaskForm";
import TaskStore from "../stores/TaskStore";

const HeaderContainer = () => {
  const [section, setSection] = useState<boolean>(true);
  function setTaskSection() {
    setSection(true);
  }
  function setCategorieSection() {
    setSection(false);
  }
  const onCreate = () => {
    if (!section) onCategoryCreate();
    else onTaskCreate();
  };
  const HeaderValues = {
    value: section ? "Добавить задачу" : "  Добавить категорию",
  };

  const onCategoryCreate = () => {
    ModalStore.showModal("categoryModal", {
      title: "Создание категории",
      modalName: "categoryModal",
      children: (
        <CategoryForm
          modalName="categoryModal"
          submitButtonTitle="Создать"
          closeButtonTitle="Закрыть"
          onSubmitClick={() => {
            addCategory(
              CategoryState.category.name,
              CategoryState.category.description
            );
            ModalStore.closeModal("categoryModal");
          }}
        />
      ),
    });
  };
  const onTaskCreate = () => {
    ModalStore.showModal("taskModal", {
      title: "Создание задачи",
      modalName: "taskModal",
      children: (
        <TaskForm
          modalName="taskModal"
          onSubmitClick={() => {
            addTask(
              TaskStore.task.name,
              TaskStore.task.description,
              TaskStore.task.categoryId
            );
            ModalStore.closeModal("taskModal");
          }}
          submitButtonTitle="Создать"
          closeButtonTitle="Закрыть"
        />
      ),
    });
  };

  return (
    <>
      <Header
        HeaderValues={HeaderValues}
        onCreate={onCreate}
        setTaskSection={setTaskSection}
        setCategorieSection={setCategorieSection}
      />
      <ConfirmModal {...ModalStore.modals.taskModal!} />
      <ConfirmModal {...ModalStore.modals.categoryModal!} />
    </>
  );
};

export default observer(HeaderContainer);
