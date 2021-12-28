import React from "react";
import "./TasksStyle.css";
import { ITask } from "./Task";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { modalStateValues } from "../../models/modalStateValues";

interface ITasksListContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  taskItem: ITaskItem;
  taskList?: ITask[];
  categorieList?: ICategoryItem[];
}

const TasksListContainer = (props: ITasksListContainer) => {
  const openEditModal = (
    id: string,
    name: string,
    description?: string,
    categoryId?: string
  ) => {
    props.setModalState(modalStateValues.Open.OpenEditTask);
    props.setTaskItem({
      id: id,
      name: name,
      description: description,
      categoryId: categoryId,
    });
  };
  const openDeleteModal = (id: string, name: string) => {
    props.setModalState(modalStateValues.Open.OpenDeleteTask);
    props.setTaskItem({
      id: id,
      name: name,
    });
  };

  return (
    <TasksList
      {...props}
      openEditModal={openEditModal}
      openDeleteModal={openDeleteModal}
    />
  );
};

export default TasksListContainer;
