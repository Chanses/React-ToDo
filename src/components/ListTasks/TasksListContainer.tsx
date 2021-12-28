import React from "react";
import "./TasksStyle.css";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import { modalStateValues } from "../../models/modalStateValues";

interface ITasksListContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  taskList?: ITaskItem[];
  categorieList?: ICategoryItem[];
}

const TasksListContainer = (props: ITasksListContainer) => {
  const onEdit = (task: ITaskItem) => {
    props.setModalState(modalStateValues.Open.OpenEditTask);
    props.setTaskItem({
      id: task.id,
      name: task.name,
      description: task.description,
      categoryId: task.categoryId,
    });
  };
  const onDelete = (task: ITaskItem) => {
    props.setModalState(modalStateValues.Open.OpenDeleteTask);
    props.setTaskItem({
      id: task.id,
      name: task.name,
    });
  };

  return <TasksList {...props} onEdit={onEdit} onDelete={onDelete} />;
};

export default TasksListContainer;
