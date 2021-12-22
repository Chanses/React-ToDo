import React from "react";
import { ModalState } from "../../AppContainer";
import { ICategorie } from "../ListCategories/Categorie";
import Task, { ITask, ITaskItem } from "./Task";

interface ITasksList {
  setModalState: (statge: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;

  taskItem: ITaskItem;
  taskList?: ITask[];
  categorieList?: ICategorie[];
}

const TasksList = (props: ITasksList) => {
  return (
    <>
      {props.taskList?.map((task, index) => (
        <Task {...props} {...task} key={index}></Task>
      ))}
    </>
  );
};

export default TasksList;
