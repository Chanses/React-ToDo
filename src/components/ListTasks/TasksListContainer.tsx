import React from "react";
import "./TasksStyle.css";
import { ITask } from "./Task";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";

interface ITasksListContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  taskItem: ITaskItem;
  taskList?: ITask[];
  categorieList?: ICategoryItem[];
}

const TasksListContainer = (props: ITasksListContainer) => {
  return <TasksList {...props} />;
};

export default TasksListContainer;
