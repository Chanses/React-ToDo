import React, { useState } from "react";
import { ModalState } from "../../AppContainer";
import { addCategory, addTask } from "../../dbService";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { modalStateValues } from "../../models/modalStateValues";
import ModalService from "../../Services/ModalService";
import CategoryForm from "../Modals/Forms/CategoryForm";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import Header from "./Header";
import CategoryState from "../states/CategoryState";
import Category from "../ListCategories/Category";
import { observer } from "mobx-react-lite";

interface IHeaderContainer {
  setModalState: (state: ModalState) => void;
}

const HeaderContainer = (props: IHeaderContainer) => {
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
  const createTask = () => {
    addTask("task.name", "task.description");
  };
  const createCategory = () => {
    addCategory(
      CategoryState.category.name,
      CategoryState.category.description
    );
  };
  const taskFormChildren = (
    <form action="">
      <input type="text" placeholder="Zopa" />
    </form>
  );
  const categoryFormChildren = <CategoryForm />;
  const onCategoryCreate = () => {
    ModalService.showModal("categoryModal", {
      onSubmitClick: () => {
        createCategory();
        ModalService.closeModal("categoryModal");
      },
      title: "Создание категории",
      modalName: "categoryModal",
      children: categoryFormChildren,
      submitButtonTitle: "Создать",
      closeButtonTitle: "Закрыть",
    });
  };
  const onTaskCreate = () => {
    ModalService.showModal("taskModal", {
      onSubmitClick: () => {
        createTask();
        ModalService.closeModal("taskModal");
      },
      title: "Создание задачи",
      modalName: "taskModal",
      children: taskFormChildren,
      submitButtonTitle: "Создать",
      closeButtonTitle: "Закрыть",
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
      <ConfirmModal {...ModalService.modals.taskModal!} />
      <ConfirmModal {...ModalService.modals.categoryModal!} />
    </>
  );
};

export default observer(HeaderContainer);
