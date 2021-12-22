import React from "react";
import "./TasksStyle.css";
import { ITask, ITaskItem } from "./Task";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";
import { ICategorie } from "../ListCategories/Categorie";

interface ITasksListContainer {
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  taskItem: ITaskItem;
  taskList?: ITask[];
  categorieList?: ICategorie[];
}

const TasksListContainer = (props: ITasksListContainer) => {
  return <TasksList {...props} />;
};

export default TasksListContainer;
