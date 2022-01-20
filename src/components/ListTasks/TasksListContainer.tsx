import React, { useEffect, useState } from "react";
import "./TasksStyle.css";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { modalStateValues } from "../../models/modalStateValues";
import { modalActionsType } from "../../models/enum/modalActionsType";
import { modalResultEnum } from "../../models/enum/modalResultEnum";
import { deleteTask, getTasks } from "../../dbService";
import ModalService from "../../Services/ModalService";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { observer } from "mobx-react-lite";

interface ITasksListContainer {
  setModalState: (state: ModalState) => void;
  categorieList?: ICategoryItem[];
}

const TasksListContainer = (props: ITasksListContainer) => {
  const handleLoadTasks = (tasks: ITaskItem[]) => setTasksList(tasks);
  const [tasksList, setTasksList] = useState<ITaskItem[]>();

  const [modalState, setModalState] = useState<ModalState>({
    createEditModal: {
      entityType: undefined,
      action: modalActionsType.CREATE,
      open: false,
      lastResult: modalResultEnum.OK,
    },
    deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
  });
  const [taskItem, setTaskItem] = useState<ITaskItem>({
    id: "",
    name: "",
    description: "",
    categoryId: "",
  });

  useEffect(() => {
    getTasks(handleLoadTasks);
  }, [ModalService.isOpen("confirmModal"), ModalService.isOpen("taskModal")]);

  const onUpdate = () => {
    props.setModalState(modalStateValues.Open.OpenEditTask);
  };
  const onEdit = (task: ITaskItem) => {
    setModalState(modalStateValues.Open.OpenEditCategory);
    setTaskItem({
      id: task.id,
      name: task.name,
      description: task.description,
      categoryId: task.categoryId,
    });
    let taskModalChildren = (
      <form action="">
        <input type="text" placeholder="Task edit" />
      </form>
    );
    ModalService.showModal("taskModal", {
      onSubmitClick: () => onUpdate,
      title: "Редактирование задачи",
      modalName: "taskModal",
      children: taskModalChildren,
      submitButtonTitle: "Сохранить",
      closeButtonTitle: "Закрыть",
    });
  };
  const onDelete = (task: ICategoryItem) => {
    setTaskItem({
      id: task.id,
      name: task.name,
    });

    let confirmModalChildren = `Вы уверены что хотите удалить задачу "${task.name}"`;

    ModalService.showModal("confirmModal", {
      onSubmitClick: () => {
        deleteTask(task.id);
        ModalService.closeModal("confirmModal");
      },
      title: "Удаление задачи",
      modalName: "confirmModal",
      children: confirmModalChildren,
      submitButtonTitle: "Да",
      closeButtonTitle: "Нет",
    });
  };

  return (
    <>
      <TasksList
        {...props}
        onEdit={onEdit}
        onDelete={onDelete}
        taskList={tasksList}
      />
      <ConfirmModal {...ModalService.modals.confirmModal!} />
      <ConfirmModal {...ModalService.modals.taskModal!} />
    </>
  );
};

export default observer(TasksListContainer);
