import React from "react";
import "./TasksStyle.css";
import { ITask } from "./Task";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";
import { ICategorie } from "../ListCategories/Categorie";

interface ITasksListContainer {
  setItemId: (id: string) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setModalState: (state: ModalState) => void;
  taskList?: ITask[];
  categorieList?: ICategorie[];
}

const TasksListContainer = (props: ITasksListContainer) => {
  return <TasksList {...props} />;
};

export default TasksListContainer;
