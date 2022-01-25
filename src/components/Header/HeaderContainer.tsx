import React, { useState } from "react";
import {
  addCategory,
  addTask,
  getCategories,
  getTasks,
} from "../Services/dbService";
import ModalStore from "../stores/ModalStore";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import TaskStore from "../stores/TaskStore";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoryStore from "../stores/CategoryStore";
import { ITaskItem } from "../../models/ITaskItem";

const HeaderContainer = () => {
  const [section, setSection] = useState<boolean>(true);

  const HeaderValues = {
    value: section ? "Добавить задачу" : "  Добавить категорию",
  };

  function setTaskSection() {
    setSection(true);
  }
  function setCategorieSection() {
    setSection(false);
  }
  const handleLoadCategory = (category: ICategoryItem[]) => {
    CategoryStore.setCategoryList(category);
  };
  const handleLoadTasks = (tasks: ITaskItem[]) => TaskStore.setTaskList(tasks);

  const onCreate = () => {
    if (!section) onCategoryCreate();
    else onTaskCreate();
  };

  const onCategoryCreate = () => {
    ModalStore.showModal("categoryModal", {
      title: "Создание категории",
      modalName: "categoryModal",
      submitButtonTitle: "Создать",
      closeButtonTitle: "Закрыть",
      category: CategoryStore.categoryItem,
      onSubmitClick: () => {
        addCategory(
          CategoryStore.categoryItem.name,
          CategoryStore.categoryItem.description
        );
        CategoryStore.categoryItem = { id: "", name: "", description: "" };
        ModalStore.closeModal("categoryModal");
        getCategories(handleLoadCategory);
      },
    });
  };
  const onTaskCreate = () => {
    ModalStore.showModal("taskModal", {
      title: "Создание задачи",
      modalName: "taskModal",
      submitButtonTitle: "Создать",
      closeButtonTitle: "Закрыть",
      task: TaskStore.task,
      onSubmitClick: () => {
        addTask(
          TaskStore.task.name,
          TaskStore.task.description,
          TaskStore.task.categoryId
        );
        ModalStore.closeModal("taskModal");
        TaskStore.task = { id: "", name: "", description: "", categoryId: "" };
        getTasks(handleLoadTasks);
      },
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
    </>
  );
};

export default observer(HeaderContainer);
