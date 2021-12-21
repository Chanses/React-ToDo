import React from "react";
import { ModalState } from "../../AppContainer";
import { ICategorie } from "../ListCategories/Categorie";
import Task, { ITask } from "./Task";

interface ITasksList {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setItemId: (id: string) => void;
  setModalState: (statge: ModalState) => void;
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
