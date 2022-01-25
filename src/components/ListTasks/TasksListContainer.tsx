import React from "react";
import "./TasksStyle.css";
import TasksList from "./TasksList";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { deleteTask, editTask, getTasks } from "../Services/dbService";
import ModalStore from "../stores/ModalStore";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { observer } from "mobx-react-lite";
import TaskStore from "../stores/TaskStore";
import CategoryStore from "../stores/CategoryStore";
import TaskModal from "../Modals/TaskModal";

const TasksListContainer = () => {
  const handleLoadTasks = (tasks: ITaskItem[]) => TaskStore.setTaskList(tasks);
  const onEdit = (task: ITaskItem) => {
    TaskStore.task = task;
    ModalStore.showModal("taskModal", {
      title: "Редактирование задачи",
      modalName: "taskModal",
      submitButtonTitle: "Сохранить",
      closeButtonTitle: "Закрыть",
      task: TaskStore.task,
      onSubmitClick: () => {
        editTask(
          TaskStore.task.id,
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
  const onDelete = (task: ICategoryItem) => {
    ModalStore.showModal("confirmModal", {
      title: "Удаление задачи",
      modalName: "confirmModal",
      submitButtonTitle: "Да",
      closeButtonTitle: "Нет",
      task: task,
      confirmText: `Вы уверены что хотите удалить задачу "${task.name}"`,
      onSubmitClick: () => {
        deleteTask(task.id);
        ModalStore.closeModal("confirmModal");
        getTasks(handleLoadTasks);
      },
    });
  };

  return (
    <>
      <TasksList
        categoryList={CategoryStore.categoryList}
        onEdit={onEdit}
        onDelete={onDelete}
        taskList={TaskStore.tasksList}
      />
      <ConfirmModal {...ModalStore.modals.confirmModal!} />
      <TaskModal {...ModalStore.modals.taskModal!} />
    </>
  );
};

export default observer(TasksListContainer);
