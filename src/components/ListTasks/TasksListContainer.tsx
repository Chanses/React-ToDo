import React from "react";
import "./TasksStyle.css";
import TasksList from "./TasksList";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { deleteTask, editTask } from "../../dbService";
import ModalStore from "../stores/ModalStore";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { observer } from "mobx-react-lite";
import TaskForm from "../Modals/Forms/TaskForm";
import TaskStore from "../stores/TaskStore";
import CategoryStore from "../stores/CategoryStore";
import ModalFooter from "../Modals/ModalFooter";

interface ITasksListContainer {}

const TasksListContainer = (props: ITasksListContainer) => {
  const categoryList = CategoryStore.categoryList;
  const onEdit = (task: ITaskItem) => {
    TaskStore.task.name = task.name;
    TaskStore.task.description = task.description;
    TaskStore.task.categoryId = task.categoryId;
    ModalStore.showModal("taskModal", {
      title: "Редактирование задачи",
      modalName: "taskModal",
      children: (
        <TaskForm
          submitButtonTitle="Сохранить"
          closeButtonTitle="Закрыть"
          modalName="taskModal"
          onSubmitClick={() => {
            editTask(
              task.id,
              TaskStore.task.name,
              TaskStore.task.description,
              TaskStore.task.categoryId
            );
            ModalStore.closeModal("taskModal");
          }}
        />
      ),
    });
  };
  const onDelete = (task: ICategoryItem) => {
    ModalStore.showModal("confirmModal", {
      title: "Удаление задачи",
      modalName: "confirmModal",
      children: (
        <>
          <div className="Confirm-text">{`Вы уверены что хотите удалить задачу "${task.name}"`}</div>
          <ModalFooter
            onSubmitClick={() => {
              deleteTask(task.id);
              ModalStore.closeModal("confirmModal");
            }}
            submitButtonTitle="Да"
            closeButtonTitle="Нет"
            modalName="confirmModal"
          />
        </>
      ),
    });
  };

  return (
    <>
      <TasksList
        categoryList={categoryList}
        onEdit={onEdit}
        onDelete={onDelete}
        taskList={TaskStore.tasksList}
      />
      <ConfirmModal {...ModalStore.modals.confirmModal!} />
      <ConfirmModal {...ModalStore.modals.taskModal!} />
    </>
  );
};

export default observer(TasksListContainer);
