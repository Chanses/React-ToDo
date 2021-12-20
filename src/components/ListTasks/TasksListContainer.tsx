import React from "react";
import "./TasksStyle.css";
import { ITask } from "./Task";
import TasksList from "./TasksList";
import { ModalState } from "../../AppContainer";

interface ITasksListContainer {
  setItemId: (id: string) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setModalState: ({}: ModalState) => void;
  taskList?: ITask[];
}

const TasksListContainer: React.FC<ITasksListContainer> = (props) => {
  return (
    <>
      <TasksList {...props} tasksList={props.taskList} />
    </>
  );
};

export default TasksListContainer;
